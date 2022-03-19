import { SearchResult } from "$/types/sites";
import {
  SearchMessagesArguments,
  SearchMessagesResponse,
  WebClient,
} from "@slack/web-api";
import { SLACK_TOKEN } from "$/service/envValues";
import { depend } from "velona";
import { DateTime } from "luxon";
import { PER_PAGE } from "./const";

const webClient = new WebClient(SLACK_TOKEN);

export const search = depend(
  {
    webClient: webClient as {
      search: {
        messages(
          query: SearchMessagesArguments
        ): Promise<SearchMessagesResponse>;
      };
    },
  },
  async (
    { webClient },
    query: string,
    page: number
  ): Promise<SearchResult[]> => {
    if (query === "") {
      return [];
    }

    const response = await webClient.search.messages({
      query: query,
      count: PER_PAGE,
      sort_dir: "asc",
      page: page,
      sort: "score",
    });

    return (response?.messages?.matches ?? []).map((match) => {
      return {
        text: match.text ?? "",
        link: match.permalink ?? "",
        timestamp: (
          DateTime.fromSeconds(
            Number(match.ts?.slice(0, match.ts?.indexOf(".")))
          ) ?? DateTime.now()
        ).toFormat("yyyy-MM-dd HH:mm:ss"),
      };
    });
  }
);
