import { search } from "$/repository/sites/slackRepository";
import { DateTime } from "luxon";

describe("searchのテスト", () => {
  test("Slackから検索結果を取得できる", async () => {
    const injectedSearch = search.inject(() => ({
      webClient: {
        search: {
          messages: async () => {
            return {
              ok: true,
              messages: {
                matches: [
                  {
                    text: "SearchedText",
                    permalink: "http://example.com",
                    ts: "1508284197.000015",
                  },
                ],
              },
            };
          },
        },
      },
    }));

    await expect(injectedSearch("test", 1)).resolves.toStrictEqual([
      {
        text: "SearchedText",
        link: "http://example.com",
        timestamp: DateTime.fromSeconds(1508284197).toFormat(
          "yyyy-MM-dd HH:mm:ss"
        ),
      },
    ]);
  });
  test("queryが空の場合、空の検索結果がかえる", async () => {
    await expect(search("", 1)).resolves.toStrictEqual([]);
  });
});
