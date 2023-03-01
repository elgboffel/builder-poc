import { type NextPage } from "next";
import Head from "next/head";
import { Box } from "@components/primitives/Box/Box";
import { Column, Grid } from "@components/primitives/Grid/Grid";
import { Heading } from "@components/primitives/Heading/Heading";

const Home: NextPage = () => {
  // const { data } = server.example.getText.useQuery();

  return (
    <>
      <Head>
        <title>Next - tRPC - Vanilla Extract boilerplate</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as={"main"}>
        <Grid>
          <Column>
            <Heading>Next - tRPC - Vanilla Extract boilerplate</Heading>
          </Column>
          <Column>{/*<Box>{data}</Box>*/}</Column>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
