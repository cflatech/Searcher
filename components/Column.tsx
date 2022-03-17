import { SearchTarget } from "$/types/sites";
import React, { useState } from "react";
import { Items } from "./Items";

type Props = {
  searchTarget: SearchTarget;
  query: string;
  page: number;
};

const Column: React.VFC<Props> = (props: Props) => {
  const [pageCount, setPageCount] = useState(1);

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <Items
        searchTarget={props.searchTarget}
        query={props.query}
        page={i}
        key={i}
      ></Items>
    );
  }

  const handleLoadClick = () => {
    setPageCount(pageCount + 1);
  };

  return (
    <>
      <section className="border-x-2 mt-14 flex flex-col flex-1">
        <div className="border-y-2 h-10 text-2xl px-2">
          {props.searchTarget}
        </div>
        <div className="overflow-y-scroll">
          {pages}
          <div onClick={handleLoadClick}>
            <span className="h-16 border-b-2 flex flex-col px-2 py-1 text-center justify-center">
              更に読み込む
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Column;
