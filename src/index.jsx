import React from "react";
import ReactDom from "react-dom";
import { navbar } from "./components/navbar.jsx";
import { example } from "./components/example.jsx";
import styles from "./index.scss";
const Ex = example;
const Navbar = navbar;
ReactDom.render(
  <div>
    <Navbar />
    <Ex isLoggedIn={false} names="Ian" />
    <Ex isLoggedIn={true} names="Peter" />
  </div>,
  document.querySelector("#root")
);
