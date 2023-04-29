import { TextField, Container, Box, useTheme } from "@mui/material";

import SmallTitle from "../components/Titles/SmallTitle";
import BigTitle from "../components/Titles/BigTitle";
import PillButton from "../components/PillButton/PillButton";

const Create = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: 6,
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
        <SmallTitle>Create</SmallTitle>
        <BigTitle pt={2} pb={4}>
          Do More For Your Community
        </BigTitle>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            required
            id="cause-title"
            variant="outlined"
            label="Name"
            color="secondary"
          />
          <TextField
            id="cause-description"
            label="Description"
            multiline
            rows={6}
            color="secondary"
          />
          <TextField
            id="cause-thumbnail-url"
            variant="outlined"
            label="Thumbnail URL"
            color="secondary"
          />
          <TextField
            id="cause-website-url"
            variant="outlined"
            label="Website URL"
            color="secondary"
          />
          <TextField
            id="cause-contact-email"
            variant="outlined"
            label="Contact Email"
            color="secondary"
          />
        </Box>

        <PillButton variant="contained" sx={{ mt: 4 }} onClick={() => {}}>
          Create
        </PillButton>
      </Box>
    </Container>
  );
};

export default Create;
