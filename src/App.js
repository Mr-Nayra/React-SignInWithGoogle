import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader/>
      <main>
        {ctx.isLoggedIn ? <Home /> : <Login />}
      </main>
    </>
  );
}

export default App;
