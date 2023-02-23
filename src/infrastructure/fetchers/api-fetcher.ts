import { APIFetcher } from "@infrastructure/fetchers/types";
import { fetcher } from "@infrastructure/fetchers/fetcher";

export const apiFetcher = async <Data>({ url, config }: Omit<APIFetcher, "preview">): Promise<Data> => {
  const controller = new AbortController();
  const signal = controller.signal;

  // Cancel the fetch request in 1s
  setTimeout(() => controller.abort(), 1000);

  let json;
  let response;

  try {
    response = await fetcher(url, {
      method: "GET",
      ...config,
      signal,
      headers: {
        ...(config?.headers ? { ...config.headers } : {}),
      },
    });
    json = (await response.json()) as Data;

    if (!response.ok)
      return Promise.reject(
        new Error(
          `Message: ${response.statusText}. Status: ${response.status}. Text: ${response.ok} Request path: ${
            response.url
          }. Body: ${JSON.stringify(json)}`
        )
      );
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
