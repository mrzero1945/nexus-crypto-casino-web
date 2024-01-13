import {NexusNavbar} from "../components/nexus-navbar";
import {NexusFooter} from "../components/nexus-footer";
import type { NextPage } from 'next';
import Head from 'next/head';
import faviconImg from '../resources/favicon.ico'
import { NexusStake } from "../mypages/nexus-stake";
import { SharedProvider } from "../components/context/SharedContext";

const StakePage: NextPage = () => {
  return (
    <SharedProvider>
        <div style={{ backgroundColor: "#121724" }}>
            <Head>
                <title>Nexus Crypto Casino</title>
                <meta content="Developed by Mr Z" name="description" />
                <link rel="icon" href={faviconImg.src} />
            </Head>
            <NexusNavbar />
            <NexusStake/>
            <NexusFooter />
        </div>
    </SharedProvider>
  );
};
  
  export default StakePage;