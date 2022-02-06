import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, storeToken]= useState();

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
    if (response){
      localStorage.setItem("token", JSON.stringify(token));
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
