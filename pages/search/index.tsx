import Head from "next/head";
import Button from "~/components/Button";
import SearchText from "~/components/SearchText";

const Top = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      <main>
        <header className="flex">
          <div className="text-3xl font-semibold text-center flex justify-center items-end mr-2">
            Searcher
          </div>
          <div className="mt-2 mr-2">
            <SearchText />
          </div>
          <div className="mt-2 mr-2">
            <Button onClick={() => {}}>検索</Button>
          </div>
        </header>
        <form></form>
      </main>
    </div>
  );
};

export default Top;
