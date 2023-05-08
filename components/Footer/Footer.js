import { Container, Box, Button, Typography } from "@mui/material";

import { pages } from "../../constants/constants.js";

const Footer = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        my: 8,
        textAlign: "center",
        position: "sticky",
        top: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-evenly",
          height: 100,
        }}
      >
        <Typography fontFamily={"Outfit"} fontWeight={500} fontSize={24}>
          BlockChange
        </Typography>

        {pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: "white" }}
            variant="a"
            href={`/${page.toLowerCase()}`}
          >
            {page}
          </Button>
        ))}
      </Box>
      <span style={{ color: "#888", fontSize: 10 }}>
        Copyright © 2023 BlockChange. All rights reserved.
      </span>
    </Container>
  );
};

export default Footer;
