import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { PageDivider } from "../components/Home/PageDivider";
import { SelectCountryText } from "../components/Home/SelectCountryText";
import { TravelTypes } from "../components/Home/TravelTypes";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
      <PageDivider />
      <SelectCountryText />
    </>
  );
};

export default Home;
