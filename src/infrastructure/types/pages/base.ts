import { GetStaticPropsContext, NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { Session } from "next-auth";
import { BaseError } from "@infrastructure/errors/types";
import { SettingsData } from "@infrastructure/types/generated/content";

export type PageCMSSettings = SettingsData;

export type ContextSettings = {
  cms?: PageCMSSettings;
  commerce?: never;
};

export type PageContextBase = GetStaticPropsContext & {
  dictionary?: never;
  settings: ContextSettings;
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
