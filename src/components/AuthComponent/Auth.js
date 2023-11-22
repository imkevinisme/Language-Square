import "./Auth.css";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { AuthContext } from "../../helpers/AuthContext";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data, email);
        localStorage.setItem("emailToken", email);
        // setAuthState(true);
        navigate("/");
      }
    });
  };

  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={login}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  const initialValue_login = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema_login = Yup.object().shape({
    username: Yup.string().min(3).required(),
    email: Yup.string().min(3).required(),
    password: Yup.string().min(4).required(),
  });

  const signUp = (data) => {
    axios.post("http://localhost:3001/user", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        changeAuthMode("signin");
        alert(response.data.message);
      }
    });
  };

  return (
    <div className="Auth-form-container">
      <Formik
        initialValues={initialValue_login}
        onSubmit={signUp}
        validationSchema={validationSchema_login}
      >
        <Form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>User Name</label>
              <Field
                type=""
                name="username"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <ErrorMessage name="username" component="span" />
            <div className="form-group mt-3">
              <label>Email address</label>
              <Field
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <ErrorMessage name="email" component="span" />
            <div className="form-group mt-3">
              <label>Password</label>
              <Field
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <ErrorMessage name="password" component="span" />
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
