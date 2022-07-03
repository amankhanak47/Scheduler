import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import av from "./logo.png";

export default function Home() {
  return (
    <div className="login">
      <form className="loginbox">
        <h1 className="home-heading-large">Welcome to Scheduler</h1>
        <Link to={"facultylogin"}>
          <button className="login-btn" type="submit">
            Faculty
          </button>
        </Link>
        <Link to={"student-login"}>
          <button className="login-btn" type="submit">
            Student
          </button>
        </Link>
      </form>
      <div className="right-login">
        <img src={av} alt="" />
      </div>
    </div>
  );
}
