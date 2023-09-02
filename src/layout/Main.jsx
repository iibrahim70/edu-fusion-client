import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <main className="w-[90%] mx-auto">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
