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
            Sign in with Google
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
