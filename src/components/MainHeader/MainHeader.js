import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      {props.isLoggedIn && <h1>Warmbox</h1>}
      {!props.isLoggedIn && <h1>Warmbox Sign-In</h1>}
      {props.isLoggedIn && <Navigation/>}
    </header>
  );
};

export default MainHeader;
