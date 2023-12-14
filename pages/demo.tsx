import type { NextPage } from 'next';
import Head from 'next/head';
import { NexusNavbar } from '../components/nexus-navbar';
import { NexusReq } from '../components/req-api/req-demo';
import { NexusFooter } from '../components/nexus-footer';
import faviconImg from '../resources/favicon.ico'

const APIDemo: NextPage = () => {
  return (
    <div style={{backgroundColor: " #121724"}}>
      <Head>
        <title>Nexus Crypto Casino</title>
        <meta
          content="Developed by Mr Z"
          name="description"
        />
        <link rel='icon' href={faviconImg.src} />
      </Head>
        <NexusNavbar />
        <NexusReq />
        <NexusFooter />
    </div>
  );
};

export default APIDemo;
