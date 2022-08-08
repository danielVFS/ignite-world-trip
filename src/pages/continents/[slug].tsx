import { isEmpty } from "lodash";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentCitiesList } from "../../components/Continent/ContinentCitiesList";
import { ContinentInfo } from "../../components/Continent/ContinentInfo";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { useContinentContext } from "../../hooks/useContinentContext";
import { useContinentInfo } from "../../hooks/useContinentInfo";

const Continent: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isLoading, setIsLoading] = useState(true);

  const continent = useContinentInfo({ slug: String(slug) });

  const { handleSetContinent } = useContinentContext();

  useEffect(() => {
    if (!isEmpty(continent)) {
      handleSetContinent(continent);
      setIsLoading(false);
    }
  }, [continent, handleSetContinent]);

  return (
    <>
      <Head>
        <title>{slug} | World Trip</title>
      </Head>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header hasGoBackButton />
          <ContinentBanner />
          <ContinentInfo />
          <ContinentCitiesList />
        </>
      )}
    </>
  );
};

export default Continent;
