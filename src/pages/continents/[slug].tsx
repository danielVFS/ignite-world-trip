import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { Header } from "../../components/Header";
import { useContinentInfo } from "../../hooks/useContinentInfo";

const Continent: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const continent = useContinentInfo({ slug: String(slug) });

  return (
    <>
      <Head>
        <title>{slug} | World Trip</title>
      </Head>

      <Header hasGoBackButton />
      <ContinentBanner image={continent.banner} />
      {/* <ContinentInfo />
      <ContinentCitiesList /> */}
    </>
  );
};

export default Continent;
