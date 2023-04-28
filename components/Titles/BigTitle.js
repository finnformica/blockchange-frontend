import { Typography } from "@mui/material";

const BigTitle = (props) => {
  return (
    <Typography
      {...props}
      variant="h2"
      fontFamily="Outfit"
      fontWeight={600}
      fontSize={36}
    >
      {props.children}
    </Typography>
  );
};

export default BigTitle;
