import Head from "next/head";
import { companyName, description } from "@/common-data";
import { default as HomeContainer } from "@/modules/home/home-container";

export default function Home() {
  return (
    <>
      <Head>
        <title>{companyName}</title>
        <meta name="description" content={description} />
      </Head>
      <section id="home" aria-label="home">
        <HomeContainer />
      </section>
    </>
  );
}
