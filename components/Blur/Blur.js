import { Box } from "@mui/material";
import Image from "next/image";

const Blur = () => {
  return (
    <Box>
      <Image
        src="/imgs/blur.svg"
        alt="background blur"
        width={800}
        height={800}
        style={{ position: "absolute", top: -400, left: -50, zIndex: -1 }}
      />
      <Image
        src="/imgs/blur.svg"
        alt="background blur"
        width={800}
        height={800}
        style={{ position: "absolute", top: 150, left: -350, zIndex: -1 }}
      />
    </Box>
  );
};

export default Blur;
