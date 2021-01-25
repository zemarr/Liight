import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

import Heading from "./Heading";
import Button from "./Button";

const Login = () => {
  // const { logingWithRedirect } = useAuth0();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  // helper functions

  const handleUsernameInput = (e) => {
    e.preventDefault();
    setUsername({
      username: e.target.value,
    });
  };
  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPassword({
      password: e.target.value,
    });
  };

  // const handleValidation = (e) => {
  //   // e.preventDefault();
  //   if (!username) {
  //     setErrors({
  //       errors: "* Username is required",
  //     });
  //   }
  //   if (!password) {
  //     setErrors({
  //       errors: "* Password is required",
  //     });
  //   }
  // };

  const handleSubmit = () => {
    // e.preventDefault();

    alert(username, password);
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-container">
                <div className="form-heading">
                  <Heading>
                    <h2>LOG IN</h2>
                  </Heading>
                  <Link to="/">
                    <Button className="exit">
                      <div className="icon"></div>
                    </Button>
                  </Link>
                </div>
                <hr />
                <form
                // action="/admin"
                >
                  <div className="form-group">
                    {/* {errors} */}
                    <input
                      name="username"
                      onChange={handleUsernameInput}
                      type="text"
                      className="form-control form-control-lg"
                      id="username"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      onChange={handlePasswordInput}
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Password"
                    />
                    {<span>{errors}</span>}
                  </div>
                  <div className="form-assist">
                    <button>Can't access your account?</button>
                    <button>Forgot Password?</button>
                  </div>
                  <div className="finish">
                    {" "}
                    <Button
                      // disabled={isSubmitting}
                      className="signin-btn p-3"
                      onSubmit={handleSubmit}
                    >
                      Login
                      {/* {isSubmitting ? "Logging in..." : "Login"} */}
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
