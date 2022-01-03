import { search } from "$/repository/sites/SlackRepository";

describe("searchのテスト", () => {
  test("Slackから検索結果を取得できる", async () => {
    const injectedSearch = search.inject((deps) => ({
      webClient: {
        search: {
          messages: async () => {
            return {
              ok: true,
              messages: {
                matches: [
                  { text: "SearchedText", permalink: "http://example.com" },
                ],
              },
            };
          },
        },
      },
    }));

    await expect(injectedSearch("test")).resolves.toStrictEqual([
      {
        text: "SearchedText",
        link: "http://example.com",
      },
    ]);
  });
});
