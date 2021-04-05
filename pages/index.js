import styled from "styled-components";
import Head from "next/head";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Nextjs Whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      {/* <Chat /> */}
    </Container>
  );
}

const Container = styled.div``;
