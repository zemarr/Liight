import React from "react";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

import Heading from "./Heading";
import Button from "./Button";

const Login = () => {
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
                <form>
                  <div className="form-group">
                    <input
                      name="username"
                      type="text"
                      className="form-control form-control-md"
                      id="username"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="password"
                      className="form-control form-control-md"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-assist">
                    <button>Can't access your account?</button>
                    <button>Forgot Password?</button>
                  </div>
                  <div className="finish">
                    {" "}
                    <Button className="signin-btn p-3">Login</Button>
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
