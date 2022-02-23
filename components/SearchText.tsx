import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchText: React.VFC<Props> = (props) => {
  return (
    <>
      <div className="mx-auto max-w-xs">
        <label className="relative block text-xs">
          <span className="absolute pl-2 pt-2">
            <img className="h-5 w-5 fill-slate-300" src="/search.svg" />
          </span>
        </label>
        <input
          className="border border-slate-300 rounded-md py-1 pr-3 pl-9 w-full"
          onChange={props.onChange}
          type="text"
        />
      </div>
    </>
  );
};

export default SearchText;
