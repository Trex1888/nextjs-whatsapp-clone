import styled from "styled-components";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Nextjs Whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </Container>
  );
}

const Container = styled.div``;
