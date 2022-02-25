import { SearchResult } from "./../../types/sites";
export type Methods = {
  get: {
    query: {
      query: string;
    };

    resBody: SearchResult[];
  };
};
