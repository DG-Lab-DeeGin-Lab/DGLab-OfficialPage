import React from "react";
import ReactDom from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { navbar } from "./components/navbar.jsx";
import example from "./components/example.jsx";
import styles from "./index.scss";
const Navbar = navbar;
ReactDom.render(
  <div>
    <HashRouter>
      <Navbar />
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={example}></Route>
        </Switch>
      </div>
    </HashRouter>
  </div>,
  document.querySelector("#root")
);
