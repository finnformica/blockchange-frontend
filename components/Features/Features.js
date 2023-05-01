import { Container, Box, Typography } from "@mui/material";

import Image from "next/image";

import PillButton from "../PillButton/PillButton";
import SmallTitle from "../Titles/SmallTitle";
import BigTitle from "../Titles/BigTitle";

const FeatureImage = ({ src }) => (
  <>
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      <Image
        src={src}
        alt="Image of feature"
        width={250}
        height={250}
        quality={100}
        style={{ borderRadius: 50 }}
      />
    </Box>
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <Image
        src={src}
        alt="Image of feature"
        width={150}
        height={150}
        quality={100}
        style={{ borderRadius: 30 }}
      />
    </Box>
  </>
);

const FeatureContent = ({ title, description, button }) => (
  <Box sx={{ textAlign: "left" }}>
    <BigTitle maxWidth={300}>{title}</BigTitle>
    <Typography fontSize={12} maxWidth={220} sx={{ pt: 1, pl: 0.5, mb: 2 }}>
      {description}
    </Typography>
    {button ? (
      <PillButton variant={button.variant} href={button.href}>
        {button.content}
      </PillButton>
    ) : (
      <></>
    )}
  </Box>
);

const FeatureContainer = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: { xs: 4, sm: 8, md: 16 },

      margin: "24px auto",
    }}
  >
    {children}
  </Box>
);

const Features = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        my: 8,
        textAlign: "center",
      }}
    >
      <SmallTitle>Our Approach</SmallTitle>
      <FeatureContainer>
        <FeatureImage src="/imgs/feature1.png" />
        <FeatureContent
          title="Transparent and Secure"
          description="Our platform is built on the blockchain, which means that all transactions are transparent and secure."
        />
      </FeatureContainer>

      <FeatureContainer>
        <FeatureContent
          title="Direct Giving"
          description="BlockChange allows you to give directly to those in need, without the need for a middleman."
          button={{ variant: "contained", content: "Create", href: "/create" }}
        />
        <FeatureImage src="/imgs/feature2.png" />
      </FeatureContainer>

      <FeatureContainer>
        <FeatureImage src="/imgs/feature3.svg" />
        <FeatureContent
          title="Tech That Transforms"
          description="We believe tech can be used to make the world a better place so we repurpose emerging tech as tools for social change."
          button={{ variant: "outlined", content: "View", href: "/view" }}
        />
      </FeatureContainer>
    </Container>
  );
};

export default Features;
