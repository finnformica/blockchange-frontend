import { Box, Typography } from "@mui/material";
import Image from "next/image";

import { features } from "../../constants/constants.js";

const CauseTrust = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 6,
        marginTop: 8,
      }}
    >
      {features.map((feature, key) => (
        <Box key={key} sx={{ display: "flex" }}>
          <Image
            src={`/imgs/${feature.title.toLowerCase()}.svg`}
            alt={feature}
            width={40}
            height={40}
            style={{
              marginTop: 6,
              marginRight: 20,
              filter:
                "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)",
            }}
          />
          <Box>
            <Typography
              variant="h5"
              fontFamily={"Outfit"}
              fontWeight={600}
              sx={{ pb: 2 }}
            >
              {feature.title}
            </Typography>
            <Typography variant="body1">{feature.desc}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CauseTrust;
