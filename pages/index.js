import Head from "next/head";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs Whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <Chat />
    </div>
  );
}
