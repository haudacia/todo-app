import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>To-Do App</h1>

        <nav>
          <ul className={styles.navBar}>
            <li>
              <Link to="/">my to-do list</Link>
            </li>
            <li>
              <Link to="/create-task">+</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
