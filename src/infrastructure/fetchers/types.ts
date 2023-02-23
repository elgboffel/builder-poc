export type BaseFetcher = {
  url: string;
  config?: RequestInit | null;
  preview?: boolean;
};

export type GraphQLResponse<T = any> = {
  data: T;
  errors?: GraphQLError[];
  extensions?: any;
};

export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  extensions?: any;
}

export type GraphQLFetcher = BaseFetcher & {
  query: string;
  variables?: { [key: string]: unknown };
};

export type APIFetcher = BaseFetcher & {
  apiToken?: string;
};
