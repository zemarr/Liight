import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import auth from "../components/Auth";

import Heading from "./Heading";
import Button from "./Button";

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isLoggedIn: false,
  });
  const [error, setError] = useState({
    nameError: "",
    passwordError: "",
    accountError: "",
  });

  const handleUsername = (e) => {
    setUser({
      username: e.target.value,
      password: user.password,
    });
  };
  const handlePassword = (e) => {
    setUser({
      username: user.username,
      password: e.target.value,
    });
  };
  const logInStatus = () => {
    auth.login(() => {
      props.history.push("/admin");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to authenticate user Login
    if (!user.username && !user.password) {
      setError({
        accountError: "Username and Password is required",
      });
    } else if (user.username && !user.password) {
      setError({
        passwordError: "Password is required",
      });
    } else if (!user.username && user.password) {
      setError({
        nameError: "You must enter your username",
      });
    } else if (user.password.length < 6) {
      setError({
        passwordError:
          "Too short! Your password must contain at least six(6) characters",
      });
    } else if (user.username !== "admin" && user.password !== "admin12345") {
      setError({
        accountError:
          "You don't have an account yet. Go to sign up to create your account!",
      });
    } else if (user.username === "admin" && user.password !== "admin12345") {
      setError({
        accountError: "Please enter your admin password",
      });
    } else if (user.username === "admin" && user.password === "admin12345") {
      logInStatus();
    }
  };

  useEffect(() => {
    // This useEffect will get data already stored in the localStorage
    const data = localStorage.getItem("admin");
    if (data) {
      setUser(JSON.parse(data)); // If we have data in the local storage, we will parse it so it can be manipulated
    }
  }, []);

  useEffect(() => {
    // This will set our state data in localStorage
    localStorage.setItem("admin", JSON.stringify(user));
  });

  return (
    <>
      <section className="login animate__animated animate__fadeIn animate__faster">
        <div className="container">
          <div className="row">
            <div className="col-md-6 animate__animated animate__fadeIn animate__fast">
              <div className="form-container">
                <div className="form-heading">
                  <Heading>
                    <h4>LOG IN</h4>
                  </Heading>
                  <Link to="/">
                    <Button className="exit">
                      <div className="icon"></div>
                    </Button>
                  </Link>
                </div>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      name="username"
                      type="text"
                      className="form-control form-control-md"
                      id="username"
                      placeholder="Username"
                      onChange={handleUsername}
                    />
                    {error.nameError}
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="password"
                      className="form-control form-control-md"
                      id="password"
                      placeholder="Password"
                      onChange={handlePassword}
                    />
                    {error.passwordError}
                  </div>
                  <div className="form-assist">
                    {error.accountError}
                    <button>Can't access your account?</button>
                    <button>Forgot Password?</button>
                  </div>
                  <div className="finish">
                    {" "}
                    <Button className="signin-btn p-3" onClick={handleSubmit}>
                      Login
                    </Button>
                    <Link to="/sign-up">
                      <Button className="signup-btn">Sign Up</Button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
