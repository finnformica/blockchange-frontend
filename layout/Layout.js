import Header from "../components/Header/Header";
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
