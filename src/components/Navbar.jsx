import React from "react";
import { Link } from "@reach/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <Link to="/" className={styles.link}>
          Products
        </Link>
        <Link to="/basket" className={styles.link}>
          <span
            className="iconify"
            data-icon="fa:shopping-bag"
            data-inline="false"
          ></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
