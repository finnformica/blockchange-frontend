import { useState } from "react";
import { TextField, Container, Box, Alert, AlertTitle } from "@mui/material";

import SmallTitle from "../components/Titles/SmallTitle";
import BigTitle from "../components/Titles/BigTitle";
import PillButton from "../components/PillButton/PillButton";

import { create, checkIfIdUnique } from "../utils/utils";
import ErrorAlert from "../components/ErrorAlert/ErrorAlert";

const Create = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    thumbnailURL: "",
    websiteURL: "",
    contactEmail: "",
  });
  const [open, setOpen] = useState(false);

  const handleCreate = async () => {
    console.log("create");
    const unique = await checkIfIdUnique(
      formState.title.toLowerCase().replaceAll(" ", "-")
    );

    if (unique) {
      create(formState);
    } else {
      setOpen(true);
    }
  };

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
      <ErrorAlert open={open} setOpen={setOpen} />
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
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
          />
          <TextField
            required
            id="cause-description"
            label="Description"
            multiline
            rows={6}
            color="secondary"
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
          />
          <TextField
            required
            id="cause-thumbnail-url"
            variant="outlined"
            label="Thumbnail URL"
            color="secondary"
            onChange={(e) =>
              setFormState({ ...formState, thumbnailURL: e.target.value })
            }
          />
          <TextField
            id="cause-website-url"
            variant="outlined"
            label="Website URL"
            color="secondary"
            onChange={(e) =>
              setFormState({ ...formState, websiteURL: e.target.value })
            }
          />
          <TextField
            id="cause-contact-email"
            variant="outlined"
            label="Contact Email"
            color="secondary"
            onChange={(e) =>
              setFormState({ ...formState, contactEmail: e.target.value })
            }
          />
        </Box>

        <PillButton
          variant="contained"
          sx={{ mt: 4 }}
          onClick={() => handleCreate()}
        >
          Create
        </PillButton>
      </Box>
    </Container>
  );
};

export default Create;
