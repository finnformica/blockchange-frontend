import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "../layout/layout";
import MetaTags from "../components/MetaTags/MetaTags";

import NextLink from "next/link";
import { forwardRef } from "react";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#010135",
            color: "#fff",
          },
        },
      },
      MuiLink: {
        defaultProps: {
          component: LinkBehaviour,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehaviour,
        },
      },
    },
  });

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetaTags />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
