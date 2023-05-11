import { Alert, AlertTitle } from "@mui/material";

const SuccessAlert = ({ open, setOpen }) => {
  return (
    <Alert
      severity="success"
      variant="filled"
      onClose={() => {
        setOpen(false);
      }}
      sx={{
        color: "white",
        position: "absolute",
        opacity: open ? 1 : 0,
        top: 20,
        left: 0,
        right: 0,
        m: "auto",
        width: "50%",
        maxWidth: 500,
        transition: "opacity .5s ease",
        zIndex: 100,
      }}
    >
      <AlertTitle>Deployment complete!</AlertTitle>
      The cause has been successfully deployed to the blockchain.
    </Alert>
  );
};

export default SuccessAlert;
