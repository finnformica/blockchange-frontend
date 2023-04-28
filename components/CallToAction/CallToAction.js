import { Box, Container, Button } from "@mui/material";

import BigTitle from "../Titles/BigTitle";
import SmallTitle from "../Titles/SmallTitle";

const CallToAction = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #3B39CD, #4CB8B8)",
          borderRadius: 6,
          height: 220,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <SmallTitle color="#000">Are you ready?</SmallTitle>
        <BigTitle maxWidth={300}>Be A Part Of The Next Big Thing</BigTitle>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "#FFF",
            borderRadius: 32,
            fontSize: 10,
            fontWeight: 600,
            padding: "10px 40px",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default CallToAction;
