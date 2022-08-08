import { isEmpty } from "lodash";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentCitiesList } from "../../components/Continent/ContinentCitiesList";
import { ContinentInfo } from "../../components/Continent/ContinentInfo";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { Continent } from "../../core/models/Continent";
import { useContinentContext } from "../../hooks/useContinentContext";
import { useContinentInfo } from "../../hooks/useContinentInfo";

interface ContinentPageProps {
  continents: Continent[];
}

const ContinentPage: NextPage<ContinentPageProps> = ({ continents }) => {
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "europe" } },
      { params: { slug: "north-america" } },
      { params: { slug: "africa" } },
      { params: { slug: "oceania" } },
    ],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<ContinentPageProps> = async () => {
  return {
    props: {
      continents: [],
    },
  };
};

export default ContinentPage;
