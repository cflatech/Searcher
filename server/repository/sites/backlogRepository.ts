import { DateTime } from "luxon";
import { BACKLOG_API_KEY, BACKLOG_URL } from "$/service/envValues";
import { SearchResult } from "$/types/sites";
import fetch from "node-fetch";
import { PER_PAGE } from "./const";

type backlogItem = {
  summary: string;
  issueKey: string;
  link: string;
  updated: string;
};

// TODO: 雑に作ってるので直す
export const search = async (
  query: string,
  page: number
): Promise<SearchResult[]> => {
  const response = await fetch(createApiUrl(query, page));

  const items: backlogItem[] = await response.json();
  return items.map((item) => {
    return {
      text: item.summary,
      link: BACKLOG_URL + "/view/" + item.issueKey,
      timestamp: DateTime.fromISO(item.updated).toFormat("yyyy-MM-dd HH:mm:ss"),
    };
  });
};

const createApiUrl = (keyward: string, page: number) => {
  const parameter =
    "apiKey=" +
    BACKLOG_API_KEY +
    "&keyword=" +
    keyward +
    "&sort=updated" +
    "&offset=" +
    PER_PAGE * page +
    "&count=" +
    PER_PAGE;

  return BACKLOG_URL + "/api/v2/issues?" + parameter;
};
