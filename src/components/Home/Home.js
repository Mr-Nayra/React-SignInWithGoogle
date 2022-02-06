import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";
import { GoogleLogout } from "react-google-login";

const Home = (props) => {
  const authctx = useContext(AuthContext);

  const logout = () => {
    authctx.onLogout();
  };
  const profile = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.home}>
      <h1>Welcome back, {profile.name}!</h1>
      <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        // className={classes.btn}
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </Card>
  );
};

export default Home;
