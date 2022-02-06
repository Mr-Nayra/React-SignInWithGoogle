import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import GoogleLogin from "react-google-login";
import AuthContext from "../../store/auth-context";

const Login = (props) => {
  const authctx = useContext(AuthContext);

  const responseGoogle = (response) => {
    authctx.onLogin(response);
  };

  const error = (response) => {
    console.log("error");
  };

  return (
    <Card className={classes.login}>
      <form>
        <div className={classes.actions}>
          <GoogleLogin
            clientId="1045215190312-o6aa88k1q9ulsopc22q7994che8psfvi.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={error}
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