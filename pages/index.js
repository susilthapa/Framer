import Head from "next/head";
import Card from "https://framer.com/m/Card-g0hh.js@CdQu0gOsCaf4QUlk0fbm";

import { Tip } from "../components/Tip";
import pizzaImage from "../public/images/pizza.jpg";
import hotelImage from "../public/images/hotel.jpg";
import lakeImage from "../public/images/lake.jpg";
import beachImage from "../public/images/beach.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer - Demo</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="cardContainre">
        <Card image={pizzaImage} className="card" title="Pizza" />
        <Card image={hotelImage} className="card" title="Hotel" />
        <Card image={lakeImage} className="card" title="Lake" />
        <Card image={beachImage} className="card" title="Beach" />
      </div>
      <Tip />
    </>
  );
}
