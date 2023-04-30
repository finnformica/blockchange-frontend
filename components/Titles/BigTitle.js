import { Typography } from "@mui/material";

const BigTitle = ({ fontSize = 36, ...props }) => {
  return (
    <Typography
      {...props}
      variant="h2"
      fontFamily="Outfit"
      fontWeight={600}
      fontSize={fontSize}
    >
      {props.children}
    </Typography>
  );
};

export default BigTitle;
