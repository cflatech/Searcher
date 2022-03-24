import { BACKLOG_API_URL } from "$/service/envValues";
import { SearchResult } from "$/types/sites";
import fetch from "node-fetch";

export const search = async (
  query: string,
  page: number
): Promise<SearchResult[]> => {
  // const response = await fetch();
  console.log(createApiUrl([1, 2], "test"));

  return [
    {
      text: "hoge",
      link: "fuga",
      timestamp: "piyo",
    },
  ];
};

const createApiUrl = (projectIds: number[], keyward: string) => {
  const parameter =
    "projectId[]=" + projectIds.join("&projectId[]=") + "&keyward=" + keyward;

  return BACKLOG_API_URL + "/issues?" + parameter;
};
