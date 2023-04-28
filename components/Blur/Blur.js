import { Box } from "@mui/material";
import Image from "next/image";

const Blur = () => {
  return (
    <>
      <Box sx={{ position: "absolute", left: 0, top: -450, zIndex: -1 }}>
        <Image
          src="/imgs/blur.svg"
          alt="background blur"
          width={900}
          height={900}
        />
      </Box>
      <Box sx={{ position: "absolute", left: 700, top: 0, zIndex: -1 }}>
        <Image
          src="/imgs/blur.svg"
          alt="background blur"
          width={900}
          height={900}
        />
      </Box>
    </>
  );
};

export default Blur;
