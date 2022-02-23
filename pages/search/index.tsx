import Head from "next/head";
import Button from "~/components/Button";

const Top = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      <main>
        <header className="flex">
          <div className="text-3xl font-semibold text-center flex justify-center items-end ">
            Searcher
          </div>
          <div className="max-w-xs mt-2 mx-2">
            <label className="relative block text-xs">
              <span className="absolute pl-2 pt-2">
                <img className="h-5 w-5 fill-slate-300" src="/search.svg" />
              </span>
            </label>
            <input
              className="border border-slate-300 rounded-md py-1 pr-3 pl-9 w-full"
              type="text"
            />
          </div>
          <div className="mt-2">
            <Button onClick={() => {}}>検索</Button>
          </div>
        </header>
        <form></form>
      </main>
    </div>
  );
};

export default Top;
