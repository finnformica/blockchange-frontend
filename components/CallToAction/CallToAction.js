import { Box, Container } from "@mui/material";

import BigTitle from "../Titles/BigTitle";
import SmallTitle from "../Titles/SmallTitle";
import PillButton from "../PillButton/PillButton";

const CallToAction = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #3B39CD, #4CB8B8)",
          borderRadius: 6,
          height: 250,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <SmallTitle color="#000">Are you ready?</SmallTitle>
        <BigTitle maxWidth={300}>Be A Part Of The Next Big Thing</BigTitle>
        <PillButton variant="contained" backgroundColor="#000">
          Get Started
        </PillButton>
      </Box>
    </Container>
  );
};

export default CallToAction;
