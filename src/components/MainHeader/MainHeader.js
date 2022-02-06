import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../store/auth-context";

const MainHeader = (props) => {
  const ctx = useContext(AuthContext);
  const profile = JSON.parse(localStorage.getItem('profile'));
  return (
    <header className={classes["main-header"]}>
      {ctx.isLoggedIn ? <><h1>Warmbox</h1> <img src={profile.imageUrl}/></> : <h1>Warmbox Sign-In</h1>}
      {/* {ctx.isLoggedIn && <Navigation onLogout={ctx.onLogout}/>} */}
      
    </header>
  );
};

export default MainHeader;
