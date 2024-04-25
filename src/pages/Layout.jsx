import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
