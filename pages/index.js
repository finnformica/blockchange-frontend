import { Container } from "@mui/material";

import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import FeaturedCauses from "../components/FeaturedCauses/FeaturedCauses";
import CallToAction from "../components/CallToAction/CallToAction";

import { retrieveContractInfo } from "../utils/utils";
import { featuredCauses } from "../constants/constants";

export default function Home({ causes }) {
  return (
    <Container maxWidth="lg">
      <Hero />
      <FeaturedCauses featuredCausesInfo={causes} />
      <Features />
      <CallToAction />
    </Container>
  );
}

export const getStaticProps = async () => {
  try {
    const causes = await retrieveContractInfo(featuredCauses);

    return {
      props: {
        causes,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        causes: [],
      },
    };
  }
};
