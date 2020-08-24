import React from "react";
import ReactDom from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { navbar } from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Projects from "./components/projects.jsx";
import styles from "./index.scss";
const Navbar = navbar;
ReactDom.render(
  <div>
    <HashRouter>
      <Navbar />
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Projects" component={Projects}></Route>
        </Switch>
      </div>
    </HashRouter>
  </div>,
  document.querySelector("#root")
);
