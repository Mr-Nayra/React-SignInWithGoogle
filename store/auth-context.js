import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

var details = {
  client_id:
    "1045215190312-o6aa88k1q9ulsopc22q7994che8psfvi.apps.googleusercontent.com",
  code:
    "4/0AX4XfWjAkRLsGv2CFOvGyKaweGj-VWj654l9oYSzJ0S9n6KasTwrt68CXs6SRszdvZWXWQ",
  redirect_uri: "http://localhost:3000/",
  client_secret: "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",
  grant_type: "authorization_code",
};

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

fetch("http://oauth2.googleapis.com/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
  body: formBody,
}).then(res =>{
  if(res.ok){
    return res.json().then(data => {
    console.log(data);
  })
}
  else{
    return res.json().then(data => {
      console.log(data);
    });
  }
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, storeToken] = useState();

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem(token);
  //
  //   if (token) {
  //     setIsLoggedIn(storedUserLoggedInInformation);
  //   }
  // }, []); //no dependencies as we want useEffect to run only once that is when the app starts

  const logoutHandler = () => {
    localStorage.removeItem(token, isLoggedIn);
    setIsLoggedIn(undefined);
  };

  const loginHandler = (response) => {
    let token = response.tokenObj;
    if (response) {
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
