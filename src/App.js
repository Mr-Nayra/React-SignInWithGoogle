import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const isLoggedIn = true;

  return (
    <>
      <MainHeader isLoggedIn={isLoggedIn}/>
      <main>
        {!isLoggedIn && <Login/>}
        {isLoggedIn && <Home/>}
      </main>
    </>
  );
}

export default App;
