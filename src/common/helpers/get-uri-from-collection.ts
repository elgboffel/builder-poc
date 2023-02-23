export const getUriFromCollection = (params?: string | string[]) => {
  if (!params) return "";

  return typeof params === "string" ? params : params?.join("/");
};
