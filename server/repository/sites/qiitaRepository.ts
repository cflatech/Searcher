import { SearchResult } from "$/types/sites";
import fetch from "node-fetch";

type qiitaItem = {
  title: string;
  url: string;
  updated_at: string;
};

export const search = async (query: string): Promise<SearchResult[]> => {
  if (query === "") {
    return [];
  }

  let items: qiitaItem[];
  try {
    const response = await fetch(
      "https://qiita.com/api/v2/items?page=1&per_page=20&query=" + query
    );
    // TODO:　そのうちちゃんと取得した値の確認する
    items = await response.json();
  } catch (e) {
    return [];
  }

  const result: SearchResult[] = items.map((item) => {
    return {
      text: item.title,
      link: item.url,
      timestamp: item.updated_at,
    };
  });

  return result;
};
