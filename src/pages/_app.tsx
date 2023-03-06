import { AppProps } from "next/app";
import { server } from "@infrastructure/trpc/trpc-config";
import { RecoilRoot } from "recoil";
import { NextPageWithLayout, Page, PageContextBase } from "@infrastructure/types/pages/base";
import { SessionProvider } from "next-auth/react";
import { vars } from "@styles/config/contract.css";
import NextNProgress from "nextjs-progressbar";
import { builder } from "@builder.io/sdk";
import { Builder } from "@builder.io/react";
builder.init("ffb2ed83b4ea4cbaa059204ca3693d3a" || "");

// Register a custom insert menu to organize your custom componnets
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register("insertMenu", {
  name: "Blocks",
  items: [{ name: "Text" }],
});
import "@components/modules/Text/Text.builder";

type AppPropsWithLayout = AppProps<Page<unknown, PageContextBase, unknown>> & {
  Component: NextPageWithLayout;
};

const { color } = vars;

const Site = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <NextNProgress
          color={color.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={false}
          nonce={"my-nonce"}
          options={{ easing: "ease", speed: 500, showSpinner: false }}
        />
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </SessionProvider>
  );
};

export default server.withTRPC(Site);
