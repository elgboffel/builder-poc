import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const intercept = require("intercept-stdout");
const withVanillaExtract = createVanillaExtractPlugin();

// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/infrastructure/env/server.mjs"));

/** @type {import("next").NextConfig} */
let nextConfig = {
  reactStrictMode: true,

  swcMinify: true,

  trailingSlash: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "X-DNS-Prefetch-Control",
  //           value: "on",
  //         },
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=63072000; includeSubDomains; preload",
  //         },
  //         {
  //           key: "X-XSS-Protection",
  //           value: "1; mode=block",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "*",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

const shouldAnalyzeBundles = process.env.ANALYZE;

if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer = require("@next/bundle-analyzer")();
  nextConfig = withVanillaExtract(withNextBundleAnalyzer(nextConfig));
}

export default withVanillaExtract(nextConfig);
