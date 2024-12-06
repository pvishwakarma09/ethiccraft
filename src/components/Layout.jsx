import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Layout() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
