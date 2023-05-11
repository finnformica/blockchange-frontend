import { Alert, AlertTitle } from "@mui/material";

const FloatingAlert = ({ open, setOpen, variant, title, message }) => {
  return (
    <Alert
      severity={variant}
      variant="filled"
      onClose={() => {
        setOpen(false);
      }}
      sx={{
        position: "absolute",
        color: "white",
        opacity: open ? 1 : 0,
        display: open ? "auto" : "none",
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
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

export default FloatingAlert;
