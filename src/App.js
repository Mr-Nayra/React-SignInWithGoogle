import React, { Component } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import GoogleLogin from 'react-google-login';

// function App() {
//   const isLoggedIn = false;
//   const responseGoogle = (response) => {
//     console.log(response);
//     console.log(response.profileObj);
//   }
//   return (
//     <>
//       <GoogleLogin
//         clientId="1045215190312-o6aa88k1q9ulsopc22q7994che8psfvi.apps.googleusercontent.com"
//         buttonText="Sign in with Google"
//         onSuccess={this.responseGoogle}
//         onFailure={this.responseGoogle}
//         cookiePolicy={'single_host_origin'}
//       />
//       <MainHeader isLoggedIn={isLoggedIn}/>
//       <main>
//         {isLoggedIn ? <Home /> : <Login />}
//       </main>
//     </>
//   );
// }


export class App extends Component {
  isLoggedIn = false;
  responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
  }
  render() {
    return (
    <>    
    <MainHeader isLoggedIn={this.isLoggedIn}/>
      <main>
        {this.isLoggedIn ? <Home /> : <Login />}
      </main>
      <GoogleLogin
      clientId="1045215190312-o6aa88k1q9ulsopc22q7994che8psfvi.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
      ux_mode="redirect"
    />
  </>)
  }
}

export default App;
