import { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Container,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";

import { HiOutlineMenuAlt1 } from "react-icons/hi";

import Image from "next/image";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

import { pages } from "../../constants/pages";

const Header = () => {
  const [hasMetamask, setHasMetamask] = useState(false);
  const [connected, setConnected] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const { activate, active, library: provider } = useWeb3React();
  const ethereum = new InjectedConnector();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);

      window.ethereum.on("accountsChanged", function (accounts) {
        setConnected(false);
      });

      connect();
    }
  }, []);

  async function connect() {
    try {
      await activate(ethereum);
      setConnected(true);
    } catch (e) {
      console.log(e);
    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none", p: 2 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              fontFamily="Outfit"
              fontWeight={700}
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex" },
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                justifyContent: "center",
              }}
            >
              <Image
                src="/imgs/blockchange-logo-white.svg"
                color="#FFF"
                alt="logo"
                width={30}
                height={30}
                style={{ marginRight: 10 }}
              />
              BlockChange
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ p: 0 }}
              >
                <HiOutlineMenuAlt1 />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: "#010135",
                    border: "1px solid #909bbc",
                    borderRadius: "10px",
                  },
                }}
              >
                {["Home"].concat(pages).map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href={page !== "Home" ? `/${page.toLowerCase()}` : "/"}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", sm: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Image
                src="/imgs/blockchange-logo-white.svg"
                color="#FFF"
                alt="logo"
                width={30}
                height={30}
                style={{ marginRight: 10 }}
              />
              BlockChange
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant="a"
                  href={`/${page.toLowerCase()}`}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {hasMetamask ? (
                <Button
                  variant="contained"
                  sx={{
                    flexGrow: 1,
                    color: "#4c82fb",
                    backgroundColor: "#213059",
                    borderRadius: 32,
                    "&:hover": {
                      backgroundColor: "#213059",
                      color: "#2B447E",
                    },
                  }}
                  startIcon={
                    <Image
                      src="/metamask.svg"
                      alt="Metamask Logo"
                      width={20}
                      height={20}
                    />
                  }
                  onClick={() => connect()}
                >
                  Connect{connected ? "ed" : ""}
                </Button>
              ) : (
                <Typography maxWidth={100}>Please install Metamask</Typography>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
