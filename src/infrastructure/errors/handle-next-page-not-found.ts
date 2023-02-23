import { statusCodes } from "@common/constants/status-codes";

export const handleNextPageNotFound = (statusCode?: number | null, url?: string | null) => {
  return statusCode === statusCodes.notFound || (!url && !statusCode);
};
