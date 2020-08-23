import React from "react";
import styles from "./navbar.scss";
export class navbar extends React.Component {
  render() {
    return (
      <div className={styles.navbar}>
        <a href="">Home</a>
        <a href="">Projects</a>
        <img className={styles.nav__logo} src="./assets/logo.png" alt="" />
        <a href="">Contact Us</a>
        <a href="">Stories</a>
      </div>
    );
  }
}
