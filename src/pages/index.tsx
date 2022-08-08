import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { ContinentSwiper } from "../components/Home/ContinentSwiper";
import { PageDivider } from "../components/Home/PageDivider";
import { SelectCountryText } from "../components/Home/SelectCountryText";
import { TravelTypes } from "../components/Home/TravelTypes";
import { continentsData } from "../core/data/ContinentsData";
import { Continent } from "../core/models/Continent";

interface HomeProps {
  continents: Continent[];
}

const Home: NextPage<HomeProps> = ({ continents }) => {
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
      <ContinentSwiper continents={continents} />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      continents: continentsData,
    },
  };
};

export default Home;
