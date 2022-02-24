import { SearchResult } from "$/types/sites";
import React from "react";
import Item from "./Item";

type Props = {
  searchTargetName: string;
  searchResults: SearchResult[];
};

const Column: React.VFC<Props> = (props: Props) => {
  return (
    <>
      <section className="overflow-y-scroll border-x-2 mt-14 flex-1">
        <div className="border-y-2 h-10 text-2xl">{props.searchTargetName}</div>
        {props.searchResults.map((searchResult) => {
          return <Item searchResult={searchResult}></Item>;
        })}
      </section>
    </>
  );
};

export default Column;
