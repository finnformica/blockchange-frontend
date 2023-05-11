import { useState } from "react";
import { TextField, Container, Box, Alert, AlertTitle } from "@mui/material";

import SmallTitle from "../components/Titles/SmallTitle";
import BigTitle from "../components/Titles/BigTitle";
import PillButton from "../components/PillButton/PillButton";
import LoadingBackdrop from "../components/LoadingBackdrop/LoadingBackdrop";

import { create, checkIfIdUnique } from "../utils/utils";
import ErrorAlert from "../components/ErrorAlert/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert/SuccessAlert";

const Create = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    thumbnailURL: "",
    websiteURL: "",
    contactEmail: "",
  });
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    const unique = await checkIfIdUnique(
      formState.title.toLowerCase().replaceAll(" ", "-")
    );

    if (unique) {
      setLoading(true);
      const tx_receipt = await create(formState);
      console.log(tx_receipt);
      setLoading(false);
      setOpenSuccessAlert(true);
      console.log("success");

      setFormState({
        title: "",
        description: "",
        thumbnailURL: "",
        websiteURL: "",
        contactEmail: "",
      });
    } else {
      setOpenErrorAlert(true);
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
      <SuccessAlert open={openSuccessAlert} setOpen={setOpenSuccessAlert} />

      <LoadingBackdrop open={loading} setOpen={setLoading} />
      <ErrorAlert open={openErrorAlert} setOpen={setOpenErrorAlert} />
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
            value={formState.title}
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
            value={formState.description}
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
            value={formState.thumbnailURL}
            onChange={(e) =>
              setFormState({ ...formState, thumbnailURL: e.target.value })
            }
          />
          <TextField
            id="cause-website-url"
            variant="outlined"
            label="Website URL"
            color="secondary"
            value={formState.websiteURL}
            onChange={(e) =>
              setFormState({ ...formState, websiteURL: e.target.value })
            }
          />
          <TextField
            id="cause-contact-email"
            variant="outlined"
            label="Contact Email"
            color="secondary"
            value={formState.contactEmail}
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
