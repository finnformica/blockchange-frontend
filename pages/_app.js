import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "../layout/layout";
import MetaTags from "../components/MetaTags/MetaTags";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { customTheme } from "../theme/theme";

const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

function MyApp({ Component, pageProps }) {
  const theme = createTheme(customTheme);

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
