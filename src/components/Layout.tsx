import React, { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-auto bg-color1">
      <Navbar />
      <div className="h-full w-full bg-color1 py-10">{children}</div>
    </div>
  );
};

export default Layout;
