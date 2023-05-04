import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

import BigTitle from "../../components/Titles/BigTitle";
import SmallTitle from "../../components/Titles/SmallTitle";
import PillButton from "../../components/PillButton/PillButton";
import StateChip from "../../components/StateChip/StateChip";

import { sampleCauses } from "../../constants/sampleCauses";
import CauseTrust from "../../components/CauseTrust/CauseTrust";

const CausePage = ({ cause }) => {
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
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box>
            <Box>
              <SmallTitle>Cause</SmallTitle>
              <StateChip
                cause={cause}
                color={cause.causeState == "2" ? "#61EF61" : "#E10600"}
              />
            </Box>
            <BigTitle fontSize={48}>{cause.title}</BigTitle>
            <Typography fontSize={14} sx={{ pt: 1 }}>
              {cause.desc}
            </Typography>
          </Box>

          <Image
            src={cause.image_url}
            layout="responsive"
            alt="Cause Image"
            width={500}
            height={300}
            style={{
              objectFit: "cover",
              borderRadius: 4,
              marginTop: 16,
              maxWidth: "500px",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          <PillButton
            variant="contained"
            {...(cause.causeState == "2" ? {} : { disabled: true })}
          >
            Donate
          </PillButton>
          {cause.email ? (
            <PillButton variant="outlined" href={`mailto:${cause.email}`}>
              Contact
            </PillButton>
          ) : (
            <></>
          )}
        </Box>
        <CauseTrust />
      </Box>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const paths = sampleCauses.map((cause) => ({
    params: { slug: cause.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const cause = sampleCauses.find((cause) => cause.id === params.slug);
  return {
    props: {
      cause,
    },
  };
};

export default CausePage;
