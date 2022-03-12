import { search as googleSearch } from "$/repository/sites/googleDriveRepository";
import { search as slackSearch } from "$/repository/sites/slackRepository";
import { SearchResult } from "$/types/sites";
import { SearchTarget } from "$/types/sites";

const getSearcher: (
  target: SearchTarget
) => (query: string) => Promise<SearchResult[]> = (target: SearchTarget) => {
  if (target === "slack") {
    return slackSearch;
  } else if (target === "googledrive") {
    return googleSearch;
  }

  return (query) => new Promise(() => []);
};

export default getSearcher;
