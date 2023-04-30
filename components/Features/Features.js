import { Container, Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import PillButton from "../PillButton/PillButton";
import SmallTitle from "../Titles/SmallTitle";
import BigTitle from "../Titles/BigTitle";

const FeatureImage = ({ src }) => (
  <>
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      <Image src={src} alt="Image of feature" width={250} height={250} />
    </Box>
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <Image src={src} alt="Image of feature" width={150} height={150} />
    </Box>
  </>
);

const FeatureContent = ({ title, description, button }) => (
  <Box>
    <SmallTitle>Analytics</SmallTitle>
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
      }}
    >
      <FeatureContainer>
        <FeatureImage src="/imgs/feature1.svg" />
        <FeatureContent
          title="Built-In Analytics To Track Your NFTs"
          description="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your BlockChange portfolio over time."
        />
      </FeatureContainer>

      <FeatureContainer>
        <FeatureContent
          title="Built-In Analytics To Track Your NFTs"
          description="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your BlockChange portfolio over time."
          button={{ variant: "contained", content: "Create", href: "/create" }}
        />
        <FeatureImage src="/imgs/feature2.svg" />
      </FeatureContainer>

      <FeatureContainer>
        <FeatureImage src="/imgs/feature3.svg" />
        <FeatureContent
          title="Built-In Analytics To Track Your NFTs"
          description="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your BlockChange portfolio over time."
          button={{ variant: "outlined", content: "View", href: "/view" }}
        />
      </FeatureContainer>
    </Container>
  );
};

export default Features;
