import { GetStaticPropsContext, NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { Session } from "next-auth";
import { BaseError } from "@infrastructure/errors/types";

/* TODO: add relevant types */
export type PageContextBase = GetStaticPropsContext & {
  dictionary?: unknown;
  cmsSettings?: unknown;
  commerceSettings?: unknown;
};

export type GenericPage = {
  error?: BaseError;
};

export type Page<Page, Context, Data> = GenericPage & {
  page: Page | null;
  context: Context | null;
  data: Data | null;
  session: Session | null;
};

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
