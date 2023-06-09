import { Box, Container, Card, Typography, Grid } from "@mui/material";

import Image from "next/image";

import SmallTitle from "../Titles/SmallTitle";
import BigTitle from "../Titles/BigTitle";
import PillButton from "../PillButton/PillButton";

const FeaturedCauses = ({ featuredCausesInfo }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        my: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: 10,
          backgroundColor: "rgba(155, 155, 155, .08)",
          backdropFilter: "blur(4px)",
          boxShadow: "0 0 4px 4px rgba(155, 155, 155, .08)",
          p: 4,
          textAlign: "center",
        }}
      >
        <SmallTitle>Featured Causes</SmallTitle>
        <BigTitle pt={2} pb={4}>
          See What Others Are Doing
        </BigTitle>
        {featuredCausesInfo ? (
          <Grid container spacing={4}>
            {featuredCausesInfo?.map((cause) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={cause.id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "transparent",
                    border: "1px solid #3c487b",
                    color: "#fff",
                    borderRadius: 4,
                  }}
                >
                  <Image
                    src={cause.image_url}
                    alt="Cause thumbnail"
                    layout="responsive"
                    width={300}
                    height={180}
                  />
                  <Box sx={{ m: 2 }}>
                    <Typography fontWeight={700}>{cause.title}</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {cause.desc}
                    </Typography>
                    <PillButton variant="contained" href={`/view/${cause.id}`}>
                      View
                    </PillButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>
            Please connect to Metamask to view featured causes
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default FeaturedCauses;
