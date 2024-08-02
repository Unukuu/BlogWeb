import React from "react";
import Footer from "../footer/footer";
import Header from "../Header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
