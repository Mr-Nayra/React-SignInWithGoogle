import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, storeToken]= useState();
  const [profile, storeProfile] = useState();

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem(token);

    if (token) {
      setIsLoggedIn(storedUserLoggedInInformation);
    }
  }, []); //no dependencies as we want useEffect to run only once that is when the app starts

  const logoutHandler = () => {
    localStorage.removeItem(token, isLoggedIn);
    setIsLoggedIn(undefined);
  };

  const loginHandler = (response) => {
    let token=response.tokenObj;
    let profile=response.profileObj;
    if (response){
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("profile", JSON.stringify(profile));
      setIsLoggedIn(JSON.stringify(token));
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
