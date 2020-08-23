import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.scss";
export class navbar extends React.Component {
  render() {
    return (
      <div className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <img className={styles.nav__logo} src="./assets/logo.png" alt="" />
        <Link to="/">Contact Us</Link>
        <Link to="/">Stories</Link>
      </div>
    );
  }
}
