import { useEffect, useState } from "react";

import { Container } from "@mui/material";

import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import FeaturedCauses from "../components/FeaturedCauses/FeaturedCauses";
import CallToAction from "../components/CallToAction/CallToAction";

import { retrieveContractInfo } from "../utils/utils";
import { featuredCauses } from "../constants/constants";

export default function Home() {
  const [causes, setCauses] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      retrieveContractInfo(featuredCauses)
        .then((causes) => {
          setCauses(causes);
        })
        .catch((e) => alert(e));
    } else {
      console.log("Ethereum object not found");
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Hero />
      <FeaturedCauses featuredCausesInfo={causes} />
      <Features />
      <CallToAction />
    </Container>
  );
}
