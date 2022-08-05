import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentInfo } from "../../components/Continent/ContinentInfo";
import { Header } from "../../components/Header";

const Continent: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} | World Trip</title>
      </Head>

      <Header hasGoBackButton />
      <ContinentBanner />
      <ContinentInfo />
    </>
  );
};

export default Continent;
