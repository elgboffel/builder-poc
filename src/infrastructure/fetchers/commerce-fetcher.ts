import { graphQLFetcher } from "@infrastructure/fetchers/graphql-fetcher";
import { APIFetcher, GraphQLFetcher } from "@infrastructure/fetchers/types";
import { env as clientEnv } from "@infrastructure/env/client.mjs";
import { env as serverEnv } from "@infrastructure/env/server.mjs";
import { isServer } from "@common/helpers/is-server";
import { apiFetcher } from "@infrastructure/fetchers/api-fetcher";

export const commerceGQLFetcher = <T>(args: Omit<GraphQLFetcher, "url">) => {
  const getApiUrl = (preview?: boolean): string => {
    const baseUrl = preview
      ? clientEnv.NEXT_PUBLIC_COMMERCE_GRAPHQL_ENDPOINT
      : clientEnv.NEXT_PUBLIC_COMMERCE_GRAPHQL_ENDPOINT;
    return `${baseUrl}`;
  };

  const getApiHeader = (preview?: boolean) => {
    const apiToken = isServer
      ? preview
        ? serverEnv.CENTRA_API_READ_TOKEN
        : serverEnv.CENTRA_API_READ_TOKEN
      : preview
      ? clientEnv.NEXT_PUBLIC_CENTRA_API_READ_TOKEN
      : clientEnv.NEXT_PUBLIC_CENTRA_API_READ_TOKEN;

    return {
      Authorization: `Bearer ${apiToken}`,
    };
  };

  const { preview, config, ...remainingArgs } = args;

  return graphQLFetcher<T>({
    ...remainingArgs,
    url: getApiUrl(preview),
    config: { ...config, headers: { ...getApiHeader(preview), ...config?.headers } },
  });
};

export const commerceAPIFetcher = <T>(args: APIFetcher) => {
  const getApiUrl = (preview?: boolean): string => {
    const baseUrl = preview ? serverEnv.CENTRA_CHECKOUT_API_ENDPOINT : serverEnv.CENTRA_CHECKOUT_API_ENDPOINT;
    return `${baseUrl}`;
  };

  const getApiHeader = (preview?: boolean): Record<string, string> => {
    const apiToken = isServer
      ? preview
        ? serverEnv.CENTRA_CHECKOUT_API_SHARED_SECRET
        : serverEnv.CENTRA_CHECKOUT_API_SHARED_SECRET
      : preview
      ? serverEnv.NEXT_PUBLIC_CENTRA_API_READ_TOKEN
      : serverEnv.NEXT_PUBLIC_CENTRA_API_READ_TOKEN;

    return isServer ? { Authorization: `Bearer ${apiToken}` } : { "API-Authorization": `${apiToken}` };
  };

  const { preview, url, config } = args;

  return apiFetcher<T>({
    url: `${getApiUrl(preview)}${url}`,
    config: {
      ...config,
      headers: {
        ...getApiHeader(preview),
        ...(args?.apiToken ? { "api-token": args?.apiToken } : {}),
        ...config?.headers,
      },
    },
  });
};
