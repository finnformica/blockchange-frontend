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
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
        <Typography variant="body1" sx={{ ml: 2, p: 2, fontWeight: 500 }}>
          Click anywhere to close
        </Typography>
      </Backdrop>
    </div>
  );
};

export default LoadingBackdrop;
