import type { NextPage } from 'next';
import Head from 'next/head';
import {NexusChat} from '../components/nexus-chat-global.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import faviconImg from '../resources/favicon.ico'
import { SharedProvider } from '../components/context/SharedContext';

const Home: NextPage = () => {
  return (
    <SharedProvider>
      <div style={{backgroundColor: " #121724"}}>
        <Head>
          <title>Nexus Crypto Casino</title>
          <meta
            content="Developed by Mr Z"
            name="description"
          />
          <link rel='icon' href={faviconImg.src} />
        </Head>
          <NexusChat/>
      </div>
    </SharedProvider>
  );
};

export default Home;
