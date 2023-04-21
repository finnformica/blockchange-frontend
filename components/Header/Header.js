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

import { FaHands } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import Image from "next/image";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const pages = ["View", "Create", "FAQs", "About"];

const Header = () => {
  const [hasMetamask, setHasMetamask] = useState(false);
  const [connected, setConnected] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const { activate, active, library: provider } = useWeb3React();
  const ethereum = new InjectedConnector();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

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
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <FaHands size="1.8rem" style={{ marginRight: 10 }} />
              BlockChange
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href={`/${page.toLowerCase()}`}
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
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <FaHands size="1.8rem" style={{ marginRight: 10 }} />
              BlockChange
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
                  color={connected ? "success" : "error"}
                  sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}
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
                "Please install Metamask"
              )}

              {hasMetamask ? (
                <Button
                  variant="contained"
                  color={connected ? "success" : "error"}
                  sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}
                  onClick={() => connect()}
                >
                  <Image
                    src="/metamask.svg"
                    alt="Metamask Logo"
                    width={20}
                    height={20}
                  />
                </Button>
              ) : (
                "Please install Metamask"
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
