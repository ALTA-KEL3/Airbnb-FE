import React, { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
