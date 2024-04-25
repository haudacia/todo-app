import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <h1>To-Do App</h1>

      <ul>
        <li>
          <NavLink end className={styles.link} to="/">
            my to-do list
          </NavLink>
        </li>
        <li>
          <NavLink end className={styles.link} to="/create-task">
            +
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
