import { SearchTarget } from "$/types/sites";
import React from "react";
import Item from "./Item";
import useAspidaSWR from "@aspida/swr";
import { apiClient } from "~/utils/apiClient";

type Props = {
  searchTarget: SearchTarget;
  query: string;
};

const Column: React.VFC<Props> = (props: Props) => {
  const { data, error, mutate } = useAspidaSWR(apiClient.search, {
    query: {
      query: props.query ?? "",
      target: props.searchTarget,
    },
  });

  return (
    <>
      <section className="border-x-2 mt-14 flex flex-col flex-1">
        <div className="border-y-2 h-10 text-2xl px-2">
          {props.searchTarget}
        </div>
        <div className="overflow-y-scroll">
          {data?.map((searchResult, index) => {
            return <Item key={index} searchResult={searchResult}></Item>;
          })}
        </div>
      </section>
    </>
  );
};

export default Column;
