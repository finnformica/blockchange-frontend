import { Alert, AlertTitle, Box, Button } from "@mui/material";

const FloatingAlert = ({ state, setState }) => {
  return (
    <Alert
      severity={state.severity}
      variant="filled"
      onClose={() => {
        setState({ ...state, open: false });
      }}
      sx={{
        position: "absolute",
        color: "white",
        opacity: state.open ? 1 : 0,
        display: state.open ? "auto" : "none",
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
      <AlertTitle>{state.title}</AlertTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {state.message}
        {state.href ? (
          <Button
            color="success"
            variant="contained"
            href={state.href}
            sx={{ color: "white", mt: 2 }}
          >
            View
          </Button>
        ) : (
          <></>
        )}
      </Box>
    </Alert>
  );
};

export default FloatingAlert;
