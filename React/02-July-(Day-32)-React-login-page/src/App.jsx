import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="box-container">
          <h1>Login Form</h1>
          <button id='login-btn'><h3>Login</h3></button>
          <button id='signup-btn'><h3>Signup</h3></button>
          <input type="text" placeholder='Enter username' /><br />
          <input type="password" placeholder='Enter password'/><br />
          <div className="link-container"><a href="#">forgot password?</a></div>
          <button id='main-login-btn'><h3>Login</h3></button>
          <div className="btm-link-container">Not a member?<a href="#"> forgot password?</a></div>
        </div>
      </div>
    </div>
  )
}

export default App
