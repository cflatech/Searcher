import { SearchResult } from "$/types/sites";
import React from "react";

type Props = {
  searchResult: SearchResult;
};

const Item: React.VFC<Props> = (props: Props) => {
  return (
    <>
      <a href={props.searchResult.link} target="_blank">
        <div className="h-20 border-b-2 flex flex-col justify-between px-2 py-1">
          <div className="line-clamp-2 break-all">
            {props.searchResult.text}
          </div>
          <div className="align-bottom">
            更新：{props.searchResult.timestamp}
          </div>
        </div>
      </a>
    </>
  );
};

export default Item;
