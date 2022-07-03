import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import av from "./logo.png";

export default function StudentSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");

  let navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://hackelite1.herokuapp.com/auth/studentsignup`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
       
        branch: branch,
      }),
    });
    const json = await response.json();

    if (json.sucess) {
      navigate("/student-login");
      //    alert(`TOKEN : ${json.authtoken}`)
    } 
  };
  return (
    <div className="login">
      <form className="loginbox" onSubmit={handlesubmit}>
        <h1 className="login-title">Student Signup</h1>
        
        <div className="login-inputcontainer">
          <div>
            <label htmlFor="name" className="inp-component">
              <input
                placeholder="Name *"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="inp-component" htmlFor="email">
              <input
                placeholder="Email Address *"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="branch" className="inp-component">
              <input
                placeholder="Branch *"
                onChange={(e) => setBranch(e.target.value)}
                value={branch}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password *"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="login-input"
                type="password"
              />
            </label>
          </div>
          <div>
            <label htmlFor="conform-password" className="inp-component">
              <input
                placeholder="Conform Password *"
                // onChange={(e) => setPassword(e.target.value)}
                // value={password}
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Signup
        </button>
        <div className="login-footer-desc">
          <p>
            Already Have An Account? <Link to={"/student-login"}> Login</Link>
          </p>
        </div>
      </form>
      <div className="right-login">
        <img src={av} alt="" />
      </div>
    </div>
  );
}
