import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="box-container">
        <h1>Login Form</h1>

        <div className="btn-container">
          <button id="login-btn">
            <h3>Login</h3>
          </button>

          <button id="signup-btn">
            <h3>Signup</h3>
          </button>
        </div>

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <div className="link-container">
          <a href="#">Forgot password?</a>
        </div>

        <button id="main-login-btn">
          <h3>Login</h3>
        </button>

        <div className="btm-link-container">
          Not a member?
          <a href="#"> Signup now</a>
        </div>
      </div>
    </div>
  );
};

export default App;