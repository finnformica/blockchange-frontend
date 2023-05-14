import { useState } from "react";
import { TextField, Container, Box } from "@mui/material";

import SmallTitle from "../components/Titles/SmallTitle";
import BigTitle from "../components/Titles/BigTitle";
import PillButton from "../components/PillButton/PillButton";
import LoadingBackdrop from "../components/LoadingBackdrop/LoadingBackdrop";

import { create, checkIfIdUnique } from "../utils/utils";
import FloatingAlert from "../components/FloatingAlert/FloatingAlert";

const Create = () => {
  const [formState, setFormState] = useState({
    title: "",
    id: "",
    description: "",
    thumbnailURL: "",
    websiteURL: "",
    contactEmail: "",
  });
  const [alertState, setAlertState] = useState({
    open: false,
    severity: "success",
    message: "",
    title: "",
  });

  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    const account = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (account[0] == undefined) {
      setAlertState({
        open: true,
        severity: "error",
        title: "No account found",
        message: "Please connect your wallet to create a cause.",
      });
    } else {
      const unique = await checkIfIdUnique(
        formState.title.toLowerCase().replaceAll(" ", "-")
      );

      if (unique) {
        try {
          setLoading(true);
          const tx_receipt = await create(formState);

          if (tx_receipt?.status == 1) {
            setAlertState({
              open: true,
              severity: "success",
              title: "Deployment complete!",
              message: `The cause has been successfully deployed to the blockchain.\nView using the id: ${formState.id}`,
              href: `/view/${formState.id}`,
            });

            setFormState({
              title: "",
              id: "",
              description: "",
              thumbnailURL: "",
              websiteURL: "",
              contactEmail: "",
            });
          }
        } catch (e) {
          setAlertState({
            open: true,
            severity: "error",
            title: "Deployment failed",
            message: "The cause could not be deployed to the blockchain.",
          });
        } finally {
          setLoading(false);
        }
      } else {
        setAlertState({
          open: true,
          severity: "error",
          title: "Name taken",
          message: "This name is no longer available - please choose another.",
        });
      }
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
      <LoadingBackdrop open={loading} setOpen={setLoading} />
      <FloatingAlert state={alertState} setState={setAlertState} />
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
              setFormState({
                ...formState,
                title: e.target.value,
                id: e.target.value.toLowerCase().replaceAll(" ", "-"),
              })
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
            label="Thumbnail image URL"
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
