import Header from "../components/Header/header";
import Blur from "../components/Blur/Blur";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        <Blur />
        {children}
      </main>
    </>
  );
};

export default Layout;
