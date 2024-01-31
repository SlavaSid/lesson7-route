import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
