import { Backdrop, CircularProgress, Typography } from "@mui/material";

export const LoadingBackdrop = ({ open, setOpen }) => {
  return (
    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          flexDirection: "column",
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
        <Typography variant="body1" sx={{ ml: 2, p: 2, fontWeight: 500 }}>
          Sending request to the blockchain...
        </Typography>
        <Typography variant="body1" sx={{ ml: 2, p: 2, fontWeight: 500 }}>
          This may take a minute.
        </Typography>
      </Backdrop>
    </div>
  );
};

export default LoadingBackdrop;
