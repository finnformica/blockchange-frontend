import { Container } from "@mui/material";

import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import FeaturedCauses from "../components/FeaturedCauses/FeaturedCauses";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Hero />
      <FeaturedCauses />
      <Features />
    </Container>
  );
}
