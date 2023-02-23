import { GraphQLFetcher, GraphQLResponse } from "@infrastructure/fetchers/types";
import { fetcher } from "@infrastructure/fetchers/fetcher";
import { stripIgnoredCharacters } from "graphql/utilities";

export const graphQLFetcher = async <Data>({
  url,
  query,
  variables,
  config,
}: GraphQLFetcher): Promise<GraphQLResponse<Data>> => {
  const controller = new AbortController();
  const signal = controller.signal;

  // Cancel the fetch request in 1s
  setTimeout(() => controller.abort(), 1000);

  let json;
  let response;
  try {
    response = await fetcher(url, {
      method: "POST",
      body: JSON.stringify({
        query: stripIgnoredCharacters(query),
        variables,
      }),
      ...config,
      signal,
      headers: {
        ...(config?.headers ? { ...config.headers } : {}),
      },
    });

    if (response.status !== 200)
      return Promise.reject(
        new Error(`Message: ${response.statusText}. Status: ${response.status}. Request path: ${response.url}.`)
      );

    json = (await response.json()) as GraphQLResponse<Data>;
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      return Promise.reject(new Error(`There was a SyntaxError: ${error}`));
    }

    return Promise.reject(new Error(`There was an error: ${error}`));
  }

  if (json) return json;

  return Promise.reject(
    new Error(`Message: ${response.statusText}. Status: ${response.status}. Request path: ${response.url}.`)
  );
};
