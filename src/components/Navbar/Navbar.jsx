import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end className={styles.link} to="/">
            to-dos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
