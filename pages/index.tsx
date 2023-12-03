
import type { NextPage } from 'next';
import Head from 'next/head';
import { NexusNavbar } from '../components/nexus-navbar';
import { NexusHome } from '../mypages/nexus-home';
import { NexusFooter } from '../components/nexus-footer';
import faviconImg from '../resources/favicon.ico'

const Home: NextPage = () => {
  return (
    <div style={{backgroundColor: " #121724"}}>
      <Head>
        <title>Nexus Crypto Casino</title>
        <meta
          content="Developed by Mr Z"
          name="description"
        />
        <link href={faviconImg.src} />
      </Head>
        <NexusNavbar />
        <NexusHome />
        <NexusFooter />
    </div>
  );
};

export default Home;
