import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { FaHands } from "react-icons/fa";

import Image from "next/image";

const Header = () => {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton aria-label="blockchange logo" sx={{ mr: 0.5 }}>
            <FaHands size={"1.8rem"} />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            BlockChange
          </Typography>

          <Button
            variant="contained"
            color={"error"}
            startIcon={
              <Image
                src="/metamask.svg"
                alt="Metamask Logo"
                width={20}
                height={20}
              />
            }
          >
            Connect
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
