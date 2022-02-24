import { SearchResult } from "$/types/sites";
import React from "react";

type Props = {
  searchResult: SearchResult;
};

const Item: React.VFC<Props> = (props: Props) => {
  return (
    <>
      <a href={props.searchResult.link} target="_blank">
        <div className="h-32 border-b-2">
          {props.searchResult.text}
          <br></br>
          更新：{props.searchResult.timestamp.toFormat("yyyy-MM-dd HH:mm:ss")}
        </div>
      </a>
    </>
  );
};

export default Item;
