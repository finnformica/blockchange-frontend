import { Container } from "@mui/material";

import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import FeaturedCauses from "../components/FeaturedCauses/FeaturedCauses";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Hero />
      <FeaturedCauses />
      <Features />
      <CallToAction />
      <Footer />
    </Container>
  );
}
