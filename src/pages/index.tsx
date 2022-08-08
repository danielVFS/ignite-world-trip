import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { ContinentSwiper } from "../components/Home/ContinentSwiper";
import { PageDivider } from "../components/Home/PageDivider";
import { SelectCountryText } from "../components/Home/SelectCountryText";
import { TravelTypes } from "../components/Home/TravelTypes";
import { continentsData } from "../core/data/ContinentsData";

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
      <ContinentSwiper continents={continentsData} />
    </>
  );
};

export default Home;
