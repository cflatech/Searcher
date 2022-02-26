import { SearchResult, SearchTarget } from "$/types/sites";
export type Methods = {
  get: {
    query: {
      query: string;
      target: SearchTarget;
    };

    resBody: SearchResult[];
  };
};
