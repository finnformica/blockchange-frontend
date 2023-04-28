import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import PillButton from "../PillButton/PillButton";

const Features = () => {
  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
        }}
      >
        <Image
          src="/imgs/feature1.svg"
          alt="Image of feature"
          width={250}
          height={250}
        />
        <Box>
          <Typography variant="p" style={{ color: "#98D5D5" }} fontWeight={500}>
            ANALYTICS
          </Typography>
          <Typography
            variant="h2"
            fontFamily="Outfit"
            fontWeight={600}
            fontSize={36}
            maxWidth={300}
          >
            Built-In Analytics To Track Your NFTs
          </Typography>
          <Typography
            fontSize={10}
            maxWidth={220}
            sx={{ pt: 1, pl: 0.5, mb: 2 }}
          >
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your BlockChange portfolio over time.
          </Typography>
          <PillButton variant="outlined">View</PillButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
        }}
      >
        <Box>
          <Typography variant="p" style={{ color: "#98D5D5" }} fontWeight={500}>
            ANALYTICS
          </Typography>
          <Typography
            variant="h2"
            fontFamily="Outfit"
            fontWeight={600}
            fontSize={36}
            maxWidth={300}
          >
            Built-In Analytics To Track Your NFTs
          </Typography>
          <Typography
            fontSize={10}
            maxWidth={220}
            sx={{ pt: 1, pl: 0.5, mb: 2 }}
          >
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your BlockChange portfolio over time.
          </Typography>
          <PillButton variant="contained">Create</PillButton>
        </Box>
        <Image
          src="/imgs/feature2.svg"
          alt="Image of feature"
          width={250}
          height={250}
        />
      </Box>
    </Container>
  );
};

export default Features;
