import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import Column from "~/components/Column";
import SearchText from "~/components/SearchText";
import { SearchTarget } from "~/server/types/sites";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [currentQuery, setCurrentQuery] = useState<string>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (query === "") {
      return;
    }
    router.push({ pathname: "search", query: { q: query } });
  };

  const searchTargets: SearchTarget[] = ["slack", "googledrive", "qiita"];

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setCurrentQuery((router.query.q as string) ?? "");
    setQuery(router.query.q as string);

  return (
    <>
      <Head>
        <title>Search Results</title>
      </Head>
      <header className="flex border-b-2 pb-2 h-14 items-start absolute w-full">
        <div className="text-3xl font-semibold text-center flex justify-center items-end mx-2 mt-2">
          <a href="/">Searcher</a>
        </div>
        <form className="flex">
          <div className="mt-2 mr-2">
            <SearchText onChange={handleTextChange} value={query} />
          </div>
          <div className="mt-2 mr-2">
            <Button onClick={handleSearchButtonClick}>検索</Button>
          </div>
        </form>
      </header>
      <main className="h-full flex justify-between">
        {searchTargets.map((target) => {
            ""
            <Column
              key={target}
              searchTarget={target}
              query={currentQuery}
            ></Column>
          );
        })}
      </main>
    </>
  );
};

export default Search;
