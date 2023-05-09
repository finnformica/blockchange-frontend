import { Alert, AlertTitle } from "@mui/material";

const ErrorAlert = ({ open, setOpen }) => {
  return (
    <Alert
      severity="error"
      variant="filled"
      onClose={() => {
        setOpen(false);
      }}
      sx={{
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
      <AlertTitle>Name taken</AlertTitle>
      This name is no longer available - please choose another.
    </Alert>
  );
};

export default ErrorAlert;
