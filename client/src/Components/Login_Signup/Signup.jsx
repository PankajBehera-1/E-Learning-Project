import style from "./signup.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authFunction } from "../../Redux/login/action";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { ColorButton } from "../ProdCard/popperprodcard";

const Signup = () => {
  const [userdata, setUser] = useState({ name: "", email: "", password: "" });
  const { user, loading, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userdata, [name]: value });
  };

  // Redirect to login if signup is successful
  if (user.token) {
    return <Navigate to={"/join/login-popup"} />;
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h4>Sign up to Start Learning!</h4>
        <hr className={style.hr_line_login} />

        <div className={style.signup_inputDiv}>
          {error && (
            <Alert className={style.alert} severity="error">
              <p>There was a problem creating your account.</p>
              <p>Check that your email address is spelled correctly.</p>
            </Alert>
          )}
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Full Name"
            className={style.signup_pw}
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            className={style.signup_pw}
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className={style.signup_pw}
          />

          <div className={style.checkboxDiv}>
            <input type="checkbox" className={style.signup_checkbox} />
            <label htmlFor="signup_checkbox">
              Exciting discounts
              recommendations
            </label>
          </div>

          <ColorButton
            onClick={() => {
              const URL = "https://udemy-vr4p.onrender.com/join/signup-popup";
              dispatch(authFunction(userdata, URL));
            }}
            id="signup_input"
            className={style.signup_input}
          >
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Sign up"
            )}
          </ColorButton>

          <h6>
            <a href="#">Terms</a> and{" "}
            <a href="#">privacy policy</a>
          </h6>
          <div className={style.hv_account}>
            Already have an Account? <a href="/join/login-popup">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
