import Head from "next/head";
import Button from "components/Button";
import SearchText from "~/components/SearchText";

const Top = () => {
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
            <SearchText />
          </div>
          <div className="grid place-items-center mt-2">
            <Button onClick={() => {}}>検索</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Top;
