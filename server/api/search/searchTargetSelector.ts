import { search as googleSearch } from "$/repository/sites/googleDriveRepository";
import { search as slackSearch } from "$/repository/sites/slackRepository";
import { search as qiitaSearch } from "$/repository/sites/qiitaRepository";
import { search as backlogSearch } from "$/repository/sites/backlogRepository";
import { SearchResult } from "$/types/sites";
import { SearchTarget } from "$/types/sites";

const getSearcher: (
  target: SearchTarget
) => (query: string, page: number) => Promise<SearchResult[]> = (
  target: SearchTarget
) => {
  switch (target) {
    case "slack":
      return slackSearch;
    case "googledrive":
      return googleSearch;
    case "qiita":
      return qiitaSearch;
    case "backlog":
      return backlogSearch;
  }
};

export default getSearcher;
