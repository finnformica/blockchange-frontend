import { Container, Box, Typography } from "@mui/material";
import PillButton from "../PillButton/PillButton";
import ViewModal from "../ViewModal/ViewModal";
import React, { useState } from "react";

import Image from "next/image";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          my: { xs: 4, md: 18 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              md: 350,
            },
          }}
        >
          <Typography
            variant="h1"
            fontFamily="Outfit"
            fontWeight={700}
            fontSize={{ xs: 36, sm: 48, md: 54 }}
            lineHeight={1.1}
          >
            Blockchain Infrastructure For Charities
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
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <PillButton variant="contained" href="/create">
              Create
            </PillButton>
            <PillButton variant="outlined" onClick={handleOpen}>
              <ViewModal open={open} handleClose={handleClose}></ViewModal>
              View
            </PillButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Image
            src="/imgs/hero.png"
            alt="Hero Image"
            layout="responsive"
            width={350}
            height={350}
            style={{
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
