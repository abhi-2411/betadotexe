import React, { useState } from "react";
import "../pages-css/login-page.css";
import googleIcon from "../assets/google.png";
import backIcon from "../assets/arrowback.svg";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleRegister = () => {
    setIsLogin(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = document.querySelector(".first-name").value.trim();
    const lastName = document.querySelector(".last-name").value.trim();
    console.log("Hi, " + firstName + " " + lastName);
    console.log(email, password, firstName, lastName);
  };

  return (
    <div className="body">
      <div className="left-panel">
        <button className="material-symbols-outlined back-button">
          <img src={backIcon} alt="Back" />
        </button>
      </div>
      <div className="right-panel">
        <div className="form-container">
          <h2>Create an Account</h2>
          <div className="input-group">
            <input
              className="first-name"
              type="text"
              placeholder="First Name"
            />
            <input className="last-name" type="text" placeholder="Last Name" />
          </div>
          <input className="up" type="email" placeholder="Email" />
          <input className="down" type="password" placeholder="Password" />
          <button className="register-button" onClick={handleSubmit}>
            Sign Up
          </button>
          <div className="divider">or register with</div>
          <div className="google-register">
            <img src={googleIcon} alt="Google Register" />
          </div>
        </div>
      </div>
    </div>
  );
}
