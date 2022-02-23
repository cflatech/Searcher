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
        <section className="overflow-y-scroll border-x-2 mt-14 flex-1">
          <div className="h-32 border-b-2">ほげ</div>
          <div className="h-32 border-b-2">ほげ</div>
          <div className="h-32 border-b-2">ほげ</div>
          <div className="h-32 border-b-2">ほげ</div>
          <div className="h-32 border-b-2">ほげ</div>
          <div className="h-32 border-b-2">ほげ</div>
          <div className="h-32 border-b-2">ほげ</div>
          <div className="h-32 border-b-2">ほげ</div>
        </section>
        <section className="overflow-y-scroll border-x-2 mt-14 flex-1">
          <div className="h-32 border-b-2">ほげ</div>
        </section>
        <section className="overflow-y-scroll border-x-2 mt-14 flex-1">
          <div className="h-32 border-b-2">ほげ</div>
        </section>
      </main>
    </>
  );
};

export default Search;
