import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
          <li>
            <button >Logout</button>
          </li>
      </ul>
    </nav>
  );
};

export default Navigation;
