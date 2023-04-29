import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";

import BigTitle from "../../components/Titles/BigTitle";
import SmallTitle from "../../components/Titles/SmallTitle";
import PillButton from "../../components/PillButton/PillButton";

import { sampleCauses } from "../../constants/sampleCauses";

const CausePage = () => {
  const cause = sampleCauses[0];
  const features = [
    {
      title: "Verified",
      desc: "Every fundraiser has been verified by our Trust & Safety team.",
    },
    {
      title: "Powerful",
      desc: "Your donation helps the people and communities directly affected by this event.",
    },
    {
      title: "Trusted",
      desc: "Your donation goes straight to the wallet address of those in need.",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            maxWidth: { xs: "100%", lg: 1000 },
            gap: 4,
          }}
        >
          <Box>
            <SmallTitle>Cause</SmallTitle>
            <BigTitle fontSize={48}>{cause.title}</BigTitle>
            <Typography fontSize={14} sx={{ pt: 1 }}>
              {cause.desc}
            </Typography>
          </Box>

          <Image
            src={cause.image_url}
            alt="Cause Image"
            width={500}
            height={300}
            style={{
              objectFit: "cover",
              borderRadius: 4,
              marginTop: 16,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          <PillButton variant="contained">Donate</PillButton>
          {cause.email ? (
            <PillButton variant="outlined" href={`mailto:${cause.email}`}>
              Contact
            </PillButton>
          ) : (
            <></>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            marginTop: 8,
          }}
        >
          {features.map((feature, key) => (
            <Box key={key} sx={{ display: "flex" }}>
              <Image
                src={`/imgs/${feature.title.toLowerCase()}.svg`}
                alt={feature}
                width={40}
                height={40}
                style={{
                  marginTop: 6,
                  marginRight: 20,
                  filter:
                    "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)",
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  fontFamily={"Outfit"}
                  fontWeight={600}
                  sx={{ pb: 2 }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1">{feature.desc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default CausePage;
