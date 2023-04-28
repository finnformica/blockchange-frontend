import { Typography } from "@mui/material";

const BigTitle = ({ children }) => {
  return (
    <Typography
      variant="h2"
      fontFamily="Outfit"
      fontWeight={600}
      fontSize={36}
      maxWidth={300}
    >
      {children}
    </Typography>
  );
};

export default BigTitle;
