import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
      </ul>
    </nav>
  );
};

export default Navigation;
