import { Typography } from "@mui/material";

const SmallTitle = ({ color = "#98D5D5", ...props }) => {
  return (
    <Typography
      {...props}
      variant="p"
      color={color}
      fontWeight={600}
      fontSize={12}
      letterSpacing=".1rem"
    >
      {props.children.toUpperCase()}
    </Typography>
  );
};

export default SmallTitle;
