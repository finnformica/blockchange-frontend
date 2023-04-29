import { Container } from "@mui/material";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Blur from "../components/Blur/Blur";

const Layout = ({ children }) => {
  return (
    <Container disableGutters maxWidth={false} style={{ minHeight: "100vh" }}>
      <Header />
      <Blur />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
