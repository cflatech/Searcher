import { DateTime } from "luxon";

export type SearchResult = {
  text: string;
  link: string;
  timestamp: string;
};

export type SearchTarget = "slack" | "googledrive" | "qiita"; // | "backlog"
