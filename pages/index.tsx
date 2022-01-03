import Head from "next/head";

const Top = () => {
  return (
    <div>
      <Head>
        <title>Seacher Top</title>
      </Head>
      <main>
        <h1>Searcher</h1>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </main>
    </div>
  );
};

export default Top;
