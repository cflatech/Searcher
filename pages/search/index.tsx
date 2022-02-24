import { DateTime } from "luxon";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "~/components/Button";
import Column from "~/components/Column";
import SearchText from "~/components/SearchText";
import { SearchResult } from "~/server/types/sites";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>(router.query.q as string);

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

  const test: SearchResult[] = [
    {
      text: "テストテキスト1",
      link: "https://example.com",
      timestamp: DateTime.now(),
    },
    {
      text: "テストテキスト2",
      link: "https://example.com",
      timestamp: DateTime.now(),
    },
    {
      text: "テストテキスト3",
      link: "https://example.com",
      timestamp: DateTime.now(),
    },
    {
      text: "テストテキスト4",
      link: "https://example.com",
      timestamp: DateTime.now(),
    },
    {
      text: "テストテキスト5",
      link: "https://example.com",
      timestamp: DateTime.now(),
    },
    {
      text: "テストテキスト6",
      link: "https://example.com",
      timestamp: DateTime.now(),
    },
    {
      text: "テストテキスト7",
      link: "https://example.com",
      timestamp: DateTime.now(),
    },
  ];

  return (
    <>
      <Head>
        <title>Search Results</title>
      </Head>
      <header className="flex border-b-2 pb-2 h-14 items-start absolute w-full">
        <div className="text-3xl font-semibold text-center flex justify-center items-end mx-2 mt-2">
          Searcher
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
        <Column searchTargetName="Qiita" searchResults={test}></Column>
        <Column searchTargetName="Google Drive" searchResults={test}></Column>
      </main>
    </>
  );
};

export default Search;
