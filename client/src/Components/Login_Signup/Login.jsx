import style from "./login.module.css";
import React, { useState } from "react";
import { ColorButton } from "../ProdCard/popperprodcard";
import { useDispatch, useSelector } from "react-redux";
import { authFunction } from "../../Redux/login/action";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [userdata, setUser] = useState({ email: "", password: "" });
  const { user, loading, error } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userdata, [name]: value });
  };
  if (user.token) {
    console.log(user.token);
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div className={style.container}>
      <div className={style.card}>
        <h4>Log In to Your Account!</h4>
        <hr className={style.hr_line_login}></hr>

        <div className={style.login_inputDiv}>
          {error ? (
            <Alert className={style.alert} severity="error">
              <p>There was a problem logging in.</p>
              <p>Check your email and password or create an account.</p>
            </Alert>
          ) : (
            <></>
          )}
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="email"
            className={style.login_pw}
          ></input>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Passward"
            className={style.login_pw}
          ></input>

          {/* <button id="login_input">Log in</button> */}
          <ColorButton
            onClick={() => {
              const URL = "https://udemy-vr4p.onrender.com/join/login-popup";
              dispatch(authFunction(userdata, URL));
        
            }}
            id="login_input"
            className={style.login_input}
          >
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Log in"
            )}
          </ColorButton>
        </div>

        <div className={style.forgot_pws}>
          <span className="style.forgot_pw">or </span>
          <a href="#">Forgot Password</a>
        </div>

        <div className={style.login_org}>
          <p>
            Don't have an account?{" "}
            <span>
              <a href="/join/signup-popup">Sign up</a>
            </span>
          </p>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
