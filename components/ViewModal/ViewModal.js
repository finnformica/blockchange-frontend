import { useState } from "react";
import { Box, Modal, TextField } from "@mui/material";
import PillButton from "../PillButton/PillButton";

const ViewModal = ({ open, handleClose }) => {
  const [id, setId] = useState("");

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 2,
          width: 300,
          height: 200,
          backgroundColor: "#010135",
          border: "0.5px solid #909bbc",
          borderRadius: "10px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TextField
          label="Cause ID"
          variant="outlined"
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value.toLowerCase().replaceAll(" ", "-"));
          }}
        />
        <PillButton variant="outlined" sx={{ mt: 2 }} href={`/view/${id}`}>
          View
        </PillButton>
      </Box>
    </Modal>
  );
};

export default ViewModal;
