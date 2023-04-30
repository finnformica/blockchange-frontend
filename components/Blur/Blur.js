import { Box } from "@mui/material";

const Blur = () => {
  return (
    <Box>
      <Box
        sx={{
          "&::before": {
            background:
              "linear-gradient(to bottom right, rgba(152, 213, 213, 0), rgba(152, 213, 213, 0.2), rgba(152, 213, 213, 0.8))",
            content: '""',
            borderRadius: "50%",
            width: "700px",
            height: "700px",
            marginLeft: "-700px",
            marginTop: "-350px",
            left: "75%",
            position: "absolute",
            filter: "blur(100px)",
            transform: "translateZ(0)",
            zIndex: -1,
          },
        }}
      ></Box>

      <Box
        sx={{
          "&::before": {
            background:
              "linear-gradient(rgba(152, 213, 213, 0), rgba(152, 213, 213, 1))",
            content: '""',
            borderRadius: "50%",
            width: "800px",
            height: "800px",
            marginLeft: "-900px",
            marginTop: "200px",
            left: "25%",
            position: "absolute",
            filter: "blur(150px)",
            transform: "translateZ(0)",
            zIndex: -1,
          },
        }}
      ></Box>
    </Box>
  );
};

export default Blur;
