import type { NextPage } from "next";
import Head from "next/head";
import { NexusNavbar } from "../components/nexus-navbar";
import { NexusSlotsGamePlay } from "../mypages/nexus-slots-gameplay";
import { NexusFooter } from "../components/nexus-footer";
import faviconImg from '../resources/favicon.ico'

const Slots_Machine : NextPage = () => {
    return(
        <div style={{background: " #121724"}}>
            <Head>
                <title>Nexus Crypto Casino</title>
                <meta
                    content="Developed by Mr z"
                    name="description"
                />
                <link rel='icon' href={faviconImg.src}/>
            </Head>
            <NexusNavbar/>
            <NexusSlotsGamePlay/>
            <NexusFooter/>
        </div>
    )
}

export default Slots_Machine