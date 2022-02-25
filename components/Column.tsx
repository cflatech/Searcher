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
      <section className="border-x-2 mt-14 flex flex-col flex-1">
        <div className="border-y-2 h-10 text-2xl px-2">
          {props.searchTargetName}
        </div>
        <div className="overflow-y-scroll">
          {props.searchResults.map((searchResult, index) => {
            return <Item key={index} searchResult={searchResult}></Item>;
          })}
        </div>
      </section>
    </>
  );
};

export default Column;
