import { AppProps } from "next/app";
import { server } from "@infrastructure/trpc/trpc-config";
import { RecoilRoot } from "recoil";
import { NextPageWithLayout, Page, PageContextBase } from "@infrastructure/types/pages/base";
import { SessionProvider } from "next-auth/react";
import { vars } from "@styles/config/contract.css";
import NextNProgress from "nextjs-progressbar";

type AppPropsWithLayout = AppProps<Page<unknown, PageContextBase, unknown>> & {
  Component: NextPageWithLayout;
};

const {
  colors: { jadedGinger },
} = vars;

const Site = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <NextNProgress
          color={jadedGinger}
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
