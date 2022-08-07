import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { Header } from "../../components/Header";
import {
  ContinentContext,
  ContinentContextType,
} from "../../context/continentContext";
import { useContinentInfo } from "../../hooks/useContinentInfo";

const Continent: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const continent = useContinentInfo({ slug: String(slug) });
  const { handleSetContinent } = useContext(
    ContinentContext
  ) as ContinentContextType;

  useEffect(() => {
    handleSetContinent(continent);
  }, [continent, handleSetContinent]);

  return (
    <>
      <Head>
        <title>{slug} | World Trip</title>
      </Head>

      <Header hasGoBackButton />
      <ContinentBanner />
      {/* <ContinentInfo />
      <ContinentCitiesList /> */}
    </>
  );
};

export default Continent;
