import Footer from "../componnets/Footer";
import Header from "../componnets/Header";
import React from 'react';
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
