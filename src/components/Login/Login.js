import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  return (
    <Card className={classes.login}>
      <form >
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            <span className={classes.icon}></span>
            <span className="buttonText">Sign in with Google</span>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
