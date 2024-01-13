import type { NextPage } from 'next';
import Head from 'next/head';
import { NexusNavbar } from '../components/nexus-navbar';
import { NexusPlay } from '../mypages/nexus-play';
import { NexusFooter } from '../components/nexus-footer';
import faviconImg from '../resources/favicon.ico'
import { SharedProvider } from '../components/context/SharedContext';

const PlayPage: NextPage = () => {
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
          <NexusNavbar />
          <NexusPlay />
          <div className='pt-md-5'>
            <div className='pt-md-5'>
              <NexusFooter />
            </div>
          </div>
        </div>
    </SharedProvider>
  );
};

export default PlayPage;