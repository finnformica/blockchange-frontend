import { Container, Box, Typography } from "@mui/material";
import PillButton from "../PillButton/PillButton";

import Image from "next/image";

const Hero = () => {
  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          mx: 4,
          my: { xs: 4, sm: 18 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Box maxWidth={350}>
          <Typography
            variant="h1"
            fontFamily="Outfit"
            fontWeight={700}
            fontSize={{ xs: 36, sm: 48, md: 54 }}
            maxWidth={450}
            lineHeight={1.1}
          >
            Blockchain infrastructure for charities
          </Typography>
          <Typography fontSize={14} sx={{ pt: 2 }}>
            A distributed platform for managing donations and sending funds to
            those in need. Charity campaigns of all sizes can be created and
            managed through BlockChange.
          </Typography>
          <Box
            sx={{
              my: 6,
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <PillButton variant="contained" href="/create">
              Create
            </PillButton>
            <PillButton variant="outlined" href="/view">
              View
            </PillButton>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Image
            src="/imgs/hero-img.png"
            alt="Hero Image"
            layout="responsive"
            width={350}
            height={350}
            style={{
              position: "relative",
              left: 50,
              top: -40,
              zIndex: -10,
              maxWidth: "450px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
