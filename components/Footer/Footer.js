import { useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";

import ViewModal from "../ViewModal/ViewModal";

const Footer = () => {
  const [open, setOpen] = useState(false);
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
      <ViewModal open={open} handleClose={() => setOpen(false)} />
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

        <Button
          key="create"
          sx={{ my: 2, color: "white", display: "block" }}
          variant="a"
          href="/create"
        >
          Create
        </Button>
        <Button
          key="view"
          onClick={() => setOpen(true)}
          sx={{ my: 2, color: "white", display: "block" }}
          variant="a"
          href=""
        >
          View
        </Button>
      </Box>
      <span style={{ color: "#888", fontSize: 10 }}>
        Copyright © 2023 BlockChange. All rights reserved.
      </span>
    </Container>
  );
};

export default Footer;
