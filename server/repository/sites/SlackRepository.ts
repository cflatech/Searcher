import SiteRepository, { SearchResult } from "./SiteRepository";
import { SearchMessagesResponse, WebClient } from "@slack/web-api";

export default class SlackRepository implements SiteRepository {
  private token = "";
  private client: WebClient;

  constructor() {
    if (process.env.SLACK_TOKEN) {
      this.token = process.env.SLACK_TOKEN;
    }
    this.client = new WebClient(this.token);
  }

  async search(query: string): Promise<Array<SearchResult>> {
    const result = await this.client.search.messages({
      query: query,
      sort_dir: "asc",
      sort: "score",
    });

    // (result?.messages?.matches ?? []).forEach((data) => {});

    return [
      {
        title: "test",
        link: "http://example.com",
        description: "test",
      },
    ];
  }
}
