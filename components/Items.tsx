import { SearchTarget } from "$/types/sites";
import useAspidaSWR from "@aspida/swr";
import { apiClient } from "~/utils/apiClient";
import Item from "./Item";

type Props = {
  searchTarget: SearchTarget;
  query: string;
  page: number;
};

export const Items: React.VFC<Props> = (props: Props) => {
  const { data, error, mutate } = useAspidaSWR(apiClient.search, {
    query: {
      query: props.query ?? "",
      target: props.searchTarget,
      page: props.page,
    },
  });

  return (
    <>
      {data?.map((searchResult, index) => {
        return <Item key={index} searchResult={searchResult}></Item>;
      })}
    </>
  );
};
