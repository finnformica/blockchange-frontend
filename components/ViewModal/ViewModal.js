import React from 'react'
import {Box, Modal, Container, Typography} from "@mui/material";

const ViewModal = ({open, handleClose}) => {
  return (
    <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 2,
            bgcolor: "background.paper"
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Text in a modal
          </Typography>
          <Typography variant="body1" gutterBottom>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
  )
}

export default ViewModal