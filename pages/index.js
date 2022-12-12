import Head from "next/head";
import { Tip } from "../components/Tip";
import { Container } from "../components/Container";

// A Smart Component from Framer
import Toggle from "https://framer.com/m/Toggle-B5iT.js@52zFaz7rN7Bt3pjtYxWH";
import Card from "https://framer.com/m/Card-STzS.js@KA54VXNd4cj0BWEr9o9r";
export default function Home() {
  return (
    <>
      <Head>
        <title>Framer - Demo</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <Card />
        <Tip />
      </Container>
    </>
  );
}
