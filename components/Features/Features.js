import { Container, Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import PillButton from "../PillButton/PillButton";

const AnalyticsHeader = () => (
  <Typography
    variant="p"
    style={{ color: "#98D5D5" }}
    fontWeight={600}
    fontSize={11}
    letterSpacing=".1rem"
  >
    ANALYTICS
  </Typography>
);

const FeatureImage = ({ src }) => (
  <Image src={src} alt="Image of feature" width={250} height={250} />
);

const FeatureContent = ({ title, description, button }) => (
  <Box>
    <AnalyticsHeader />
    <Typography
      variant="h2"
      fontFamily="Outfit"
      fontWeight={600}
      fontSize={36}
      maxWidth={300}
    >
      {title}
    </Typography>
    <Typography fontSize={10} maxWidth={220} sx={{ pt: 1, pl: 0.5, mb: 2 }}>
      {description}
    </Typography>
    {button ? (
      <PillButton variant={button.variant}>{button.content}</PillButton>
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
      gap: { xs: 4, sm: 8, md: 16, lg: 24 },
      margin: "auto",
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
      }}
    >
      <FeatureContainer>
        <FeatureImage src="/imgs/feature1.svg" />
        <FeatureContent
          title="Built-In Analytics To Track Your NFTs"
          description="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your BlockChange portfolio over time."
          button={{ variant: "outlined", content: "View" }}
        />
      </FeatureContainer>

      <FeatureContainer>
        <FeatureContent
          title="Built-In Analytics To Track Your NFTs"
          description="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your BlockChange portfolio over time."
          button={{ variant: "contained", content: "Create" }}
        />
        <FeatureImage src="/imgs/feature2.svg" />
      </FeatureContainer>

      <FeatureContainer>
        <FeatureImage src="/imgs/feature3.svg" />
        <FeatureContent
          title="Built-In Analytics To Track Your NFTs"
          description="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your BlockChange portfolio over time."
        />
      </FeatureContainer>
    </Container>
  );
};

export default Features;