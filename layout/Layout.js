import Header from "../components/Header/header";
import Blur from "../components/Blur/Blur";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Blur />
      <main>{children}</main>
    </>
  );
};

export default Layout;
