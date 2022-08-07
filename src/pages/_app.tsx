import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ContinentProvider } from "../context/continentContext";
import "../styles/global-styles.css";
import "../styles/swiper.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ContinentProvider>
        <Component {...pageProps} />
      </ContinentProvider>
    </ChakraProvider>
  );
}

export default MyApp;
