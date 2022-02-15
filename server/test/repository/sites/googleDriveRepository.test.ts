import { search } from "$/repository/sites/googleDriveRepository";

describe("searchのテスト", () => {
  test("Google Driveからの検索結果を取得できる", async () => {
    await search();
  });
});
