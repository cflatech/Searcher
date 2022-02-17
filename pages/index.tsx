import Head from "next/head";

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
          <div className="mx-auto max-w-xs mt-2">
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
          <div className="grid place-items-center mt-2">
            <input
              className="bg-sky-500 px-5 py-1.5 rounded-md text-white "
              type="submit"
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default Top;
