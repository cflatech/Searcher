import { search } from "$/repository/sites/qiitaRepository";

describe("searchのテスト", () => {
  test("Qiitaからの検索結果を取得できる", async () => {
    // console.log(await search("typescript"));
  });

  test("空文字が与えられたら空配列が返る", async () => {
    expect(search("")).resolves.toStrictEqual([]);
  });
});
