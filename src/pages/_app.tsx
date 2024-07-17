import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import "./../components/Logo/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hesam Hosseini - Front-end Developer</title>
        <meta
          name="description"
          content="I'm Hesam Hosseini, a mid-level front-end developer, interested in the web, JS lover"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Hesam Hosseini" />

        {/* Open Graph / Linkedin / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hesam Hosseini | Front-end developer"
        />
        <meta
          property="og:description"
          content="Hello world! I'm Hesam Hosseini, a mid-level front-end developer, JS lover."
        />
        <meta property="og:image:alt" content="Hesam Hosseini" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta
          property="twitter:title"
          content="Hesam Hosseini | Front-end developer"
        />
        <meta
          property="twitter:description"
          content="Hello world! I'm Hesam Hosseini, a mid-level front-end develop, JS lover."
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
