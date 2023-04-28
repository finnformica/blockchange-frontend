import { Typography } from "@mui/material";

const SmallTitle = (props) => {
  return (
    <Typography
      {...props}
      variant="p"
      style={{ color: "#98D5D5" }}
      fontWeight={600}
      fontSize={11}
      letterSpacing=".1rem"
    >
      {props.children.toUpperCase()}
    </Typography>
  );
};

export default SmallTitle;
