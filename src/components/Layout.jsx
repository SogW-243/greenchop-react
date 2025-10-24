// src/components/Layout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Outlet sẽ là nơi hiển thị nội dung của các trang con */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
