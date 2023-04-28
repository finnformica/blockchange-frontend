import { Typography } from "@mui/material";

const SmallTitle = ({ children }) => {
  return (
    <Typography
      variant="p"
      style={{ color: "#98D5D5" }}
      fontWeight={600}
      fontSize={11}
      letterSpacing=".1rem"
    >
      {children.toUpperCase()}
    </Typography>
  );
};

export default SmallTitle;
