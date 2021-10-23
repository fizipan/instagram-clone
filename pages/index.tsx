import type { NextPage } from 'next';
import Head from 'next/head';

// Organisms
import Header from 'components/organisms/Header';
import Feed from 'components/organisms/Feed';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Instagram Clone Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* Header */}
        <Header />

        {/* Feed */}
        <Feed />
      </div>
    </>
  );
};

export default Home;
