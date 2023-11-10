import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
