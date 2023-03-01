import { GraphQLFetcher } from "@infrastructure/fetchers/types";
import { clientEnv, serverEnv } from "@infrastructure/env/schema.mjs";
import { isServer } from "@common/helpers/is-server";
import { graphQLFetcher } from "@infrastructure/fetchers/graphql-fetcher";

export const contentGQLFetcher = <T>(args: Omit<GraphQLFetcher, "url">) => {
  const getApiUrl = (preview?: boolean): string => {
    const apiToken = isServer ? serverEnv.CONTENT_PUBLIC_KEY : clientEnv.CONTENT_PUBLIC_KEY;

    const baseUrl = `${serverEnv.CONTENT_GQL_ENDPOINT}/${apiToken}`;
    return `${baseUrl}`;
  };

  const { preview, config, ...remainingArgs } = args;

  return graphQLFetcher<T>({
    ...remainingArgs,
    url: getApiUrl(preview),
    config: { ...config, headers: { ...config?.headers } },
  });
};
