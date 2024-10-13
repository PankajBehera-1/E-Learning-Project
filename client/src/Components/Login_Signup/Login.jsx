import style from "./login.module.css";
import React, { useState } from "react";
import { ColorButton } from "../ProdCard/popperprodcard";
import { useDispatch, useSelector } from "react-redux";
import { authFunction } from "../../Redux/login/action";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  const [userdata, setUser] = useState({ email: "", password: "" });
  const { user, loading, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userdata, [name]: value });
  };

  if (user.token) {
    return <Navigate to={"/"} />;
  }

  const handleGoogleLogin = () => {
    alert("for now this is not working!! Login Manually")
  };

  const handleFacebookLogin = () => {
    alert("for now this is not working!! Login Manually")
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h4>Log In to Your Account!</h4>
        <hr className={style.hr_line_login} />

        <div className={style.login_inputDiv}>
          {error && (
            <Alert className={style.alert} severity="error">
              <p>There was a problem logging in.</p>
              <p>Check your email and password or create an account.</p>
            </Alert>
          )}
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className={style.login_pw}
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className={style.login_pw}
          />

          <ColorButton
            onClick={() => {
              const URL = "https://udemy-vr4p.onrender.com/join/login-popup";
              dispatch(authFunction(userdata, URL));
            }}
            id="login_input"
            className={style.login_input}
          >
            {loading ? <CircularProgress style={{ color: "white" }} /> : "Log in"}
          </ColorButton>
        </div>

       

        <div className={style.socialLogin}>

          <div className={style.socialIcons}>
            <button className={style.googleBtn} onClick={handleGoogleLogin}>
              <GoogleIcon /> Google
            </button>
            <button className={style.facebookBtn} onClick={handleFacebookLogin}>
              <FacebookIcon /> Facebook
            </button>
          </div>
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
  );
};

export default Login;
