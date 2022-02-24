import { SearchResult } from "$/types/sites";
import React from "react";
import Item from "./Item";

type Props = {
  searchResults: SearchResult[];
};

const Column: React.VFC<Props> = (props: Props) => {
  return (
    <>
      {/* TODO: カラムのヘッダつける */}
      <section className="overflow-y-scroll border-x-2 mt-14 flex-1">
        {props.searchResults.map((searchResult) => {
          return <Item searchResult={searchResult}></Item>;
        })}
      </section>
    </>
  );
};

export default Column;
