import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg?react";
import styles from "./AppBar.module.css";

 const AppBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          <Logo />
        </NavLink>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default AppBar;