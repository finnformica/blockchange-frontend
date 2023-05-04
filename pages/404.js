import { Container, Typography, Box } from "@mui/material";

import SmallTitle from "../components/Titles/SmallTitle";
import BigTitle from "../components/Titles/BigTitle";
import PillButton from "../components/PillButton/PillButton";

const Error404 = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        pt: 12,
      }}
    >
      <SmallTitle>Error</SmallTitle>
      <BigTitle fontSize={108} fontWeight={700}>
        404
      </BigTitle>
      <Typography variant="body1">
        We are sorry, but the page you requested was not found
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <PillButton variant="contained" href="/">
          Go Home
        </PillButton>
        <PillButton variant="outlined" href="/view">
          View
        </PillButton>
      </Box>
    </Container>
  );
};

export default Error404;
