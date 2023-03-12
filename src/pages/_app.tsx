import { AppProps } from "next/app";
import { server } from "@infrastructure/trpc/trpc-config";
import { RecoilRoot } from "recoil";
import { NextPageWithLayout, Page, PageContextBase } from "@infrastructure/types/pages/base";
import { SessionProvider } from "next-auth/react";
import { vars } from "@styles/config/contract.css";
import NextNProgress from "nextjs-progressbar";

/* Init builder and register components */
import "@infrastructure/builder/config";
import { settingsAtom } from "@infrastructure/hooks/use-settings/atoms";
import { NextComponentType } from "next";

type AppPropsWithLayout = AppProps<Page<unknown, PageContextBase, unknown>> & {
  Component: NextPageWithLayout;
};

const { color } = vars;

const Site = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  /* We dom't want to init our page without pageprops */
  // if (!pageProps.page) return;

  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot
        initializeState={({ set }) => {
          if (pageProps?.context?.settings) set(settingsAtom, pageProps?.context?.settings);
        }}
      >
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

//TODO: remove cast for some reason app initially renders twice so add a check to see if pageProps.page is set
export default server.withTRPC(Site as NextComponentType);
