import { search } from "$/repository/sites/googleDriveRepository";
import { DateTime } from "luxon";
import { SearchResult } from "$/types/sites";

describe("searchのテスト", () => {
  test("Google Driveからの検索結果を取得できる", async () => {
    const injectedSearch = search.inject(() => ({
      getFileInformations: async (query: string) => {
        return [
          {
            id: "file_id",
            name: "SearchedText",
            modifiedTime: "2019-05-01T07:27:14.190Z",
          },
        ];
      },
    }));

    const result: SearchResult[] = [
      {
        text: "SearchedText",
        link: "https://drive.google.com/file/d/file_id",
        timestamp: DateTime.fromISO("2019-05-01T07:27:14.190Z"),
      },
    ];

    await expect(injectedSearch("test")).resolves.toStrictEqual(result);
  });
});
