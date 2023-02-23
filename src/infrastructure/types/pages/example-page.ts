import { Page, PageContextBase } from "@infrastructure/types/pages/base";
import { DehydratedState } from "@tanstack/query-core";

export type ExamplePage = {
  trpcState: DehydratedState;
};

export type ExampleNextPage = Page<ExamplePage, PageContextBase, never>;
