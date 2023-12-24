import type { NextPage } from "next";
import Head from "next/head";
import { NexusNavbar } from "../components/nexus-navbar";
import { NexusFooter } from "../components/nexus-footer";
import faviconImg from '../resources/favicon.ico'
import { NexusChatBot } from "../mypages/nexus-chatbot";

const ChatBot : NextPage = () => {
    return (
        <div style={{backgroundColor: "#121724"}}>
            <Head>
                <title>Nexus Crypto Casino</title>
                <meta content="Developed by Mr z"
                name="description"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <link rel="icon" href={faviconImg.src}/>
            </Head>
            <NexusNavbar/>
            <NexusChatBot />
            <NexusFooter/>
        </div>
    )
}

export default ChatBot