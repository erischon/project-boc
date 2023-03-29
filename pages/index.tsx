import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BOC</title>
        <meta name="description" content="Back Office for Consultants" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl text-green-500">BOC</h1>
      </main>
    </div>
  );
};

export default Home;
