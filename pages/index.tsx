import Head from "next/head";
import Button from "components/Button";
import SearchText from "~/components/SearchText";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Top = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

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
        <title>Seacher Top</title>
      </Head>
      <main>
        <h1 className="text-3xl font-semibold text-center flex justify-center items-end h-20">
          Searcher
        </h1>
        <form>
          <div className="mt-2">
            <SearchText onChange={handleTextChange} />
          </div>
          <div className="grid place-items-center mt-2">
            <Button onClick={handleSearchButtonClick}>検索</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Top;
