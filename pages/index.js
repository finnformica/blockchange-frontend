import { Typography, Container, Box } from "@mui/material";
import Image from "next/image";

import PillButton from "../components/PillButton/PillButton";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          m: 8,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            fontFamily="Outfit"
            fontWeight={700}
            fontSize={42}
            maxWidth={220}
            lineHeight={1.1}
          >
            Discover And Collect Rare NFTs
          </Typography>
          <Typography fontSize={10} maxWidth={220} sx={{ pt: 2 }}>
            The most secure marketplace for buying and selling unique crypto
            assets.
          </Typography>
          <Box sx={{ my: 6, display: "flex", gap: 2 }}>
            <PillButton variant="contained">Create</PillButton>
            <PillButton variant="outlined">View</PillButton>
          </Box>
        </Box>
        <Box>
          <Image
            src="/imgs/hero-img.svg"
            alt="Hero Image"
            width={300}
            height={300}
          />
        </Box>
      </Box>
    </Container>
  );
}
