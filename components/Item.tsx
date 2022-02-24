import { SearchResult } from "$/types/sites";
import React from "react";

type Props = {
  searchResult: SearchResult;
};

const Item: React.VFC<Props> = (props: Props) => {
  return (
    <>
      <div className="h-32 border-b-2">{props.searchResult.text}</div>
    </>
  );
};

export default Item;
