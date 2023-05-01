import { Box, Chip } from "@mui/material";
import { keyframes } from "@emotion/react";

const StateChip = ({ cause, color }) => {
  const pencilEditGreen = keyframes`
        0% {
            box-shadow: 0 0 ${color};
        }
        100% {
            box-shadow: 0 0 6px 6px transparent;
            border-width: 2px;
        }
    `;

  return (
    <Chip
      icon={
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            animation: `${pencilEditGreen} 3s ease infinite`,
            border: `2px solid ${color}`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
          }}
        ></Box>
      }
      sx={{ ml: 2, pl: 1 }}
      label={cause.causeState == "2" ? "Active" : "Inactive"}
      size="small"
    />
  );
};

export default StateChip;
