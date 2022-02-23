import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import SearchText from "~/components/SearchText";

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

  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      <header className="flex">
        <div className="text-3xl font-semibold text-center flex justify-center items-end mx-2">
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
      <main></main>
    </div>
  );
};

export default Search;
