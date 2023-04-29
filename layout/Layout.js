import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Blur from "../components/Blur/Blur";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Blur />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
