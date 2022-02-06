import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import GoogleLogin from "react-google-login";
import AuthContext from "../../store/auth-context";

const Login = (props) => {
  const authctx = useContext(AuthContext);

  const responseGoogle = (response) => {
    console.log(response);
    authctx.onLogin();
  };

  return (
    <Card className={classes.login}>
      <form>
        <div className={classes.actions}>
          <GoogleLogin
            clientId="1045215190312-o6aa88k1q9ulsopc22q7994che8psfvi.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className={classes.btn}
            cookiePolicy={"single_host_origin"}
            ux_mode="redirect"
          />
        </div>
      </form>
    </Card>
  );
};

export default Login;

// <Button type="submit" className={classes.btn}>
//   <span className={classes.icon}></span>
//   <span className="buttonText">Sign in with Google</span>
// </Button>
//
