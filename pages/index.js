import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shade.io</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Banner
          title="Make your business powerful with Shade."
          description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes."
          btnDesc="Get A Free Quote"
          imgUrl="/images/sh-banner__img.png"
        />
      </main>
    </>
  );
}
