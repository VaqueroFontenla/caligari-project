import type { NextPage } from "next";
import Head from "next/head";
import { Tag } from "ui/components/Tag";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proyecto Caligari</title>
        <meta
          name="description"
          content="Información sobre bares espectaculares"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tag>HOlaaaaaaaaaaaaaaaaaa</Tag>
    </>
  );
};

export default Home;
