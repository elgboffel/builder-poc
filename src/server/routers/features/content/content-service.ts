import { contentGQLFetcher } from "@infrastructure/fetchers/content-gql-fetcher";
import { GetSettingsDocument, GetSettingsQuery } from "@infrastructure/types/generated/content";

const getSettings = async (preview: boolean) => {
  const queryResponse = await contentGQLFetcher<GetSettingsQuery>({
    query: GetSettingsDocument,
    preview,
  });
  return queryResponse.data.oneSettings?.data;
};

export const contentService = {
  getSettings,
};
