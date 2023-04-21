import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "../layout/layout";
import MetaTags from "../components/MetaTags/MetaTags";

function MyApp({ Component, pageProps }) {
  const theme = createTheme();

  return (
    <>
      <MetaTags />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
