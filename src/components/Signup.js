import React from "react";

import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-container">
                <div className="form-heading">
                  <Heading>
                    <h2>SIGN UP</h2>
                  </Heading>
                  <Link to="/">
                    <Button className="exit">
                      <div className="icon"></div>
                    </Button>
                  </Link>
                </div>
                <hr />

                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        name="username"
                        type="username"
                        className="form-control form-control-lg"
                        id="username"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        name="phone"
                        type="number"
                        className="form-control form-control-lg"
                        id="phone"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      name="meterNumber"
                      type="text"
                      className="form-control form-control-lg"
                      id="meterNumber"
                      placeholder="Meter Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        name="password"
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        name="confirmPassword"
                        type="password"
                        className="form-control form-control-lg"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-group category">
                      <div className="user-category">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Household
                        </label>
                      </div>
                      <div className="user-category">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Company
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          By sigining up, I agree to the Liight{" "}
                          <b>Terms & Conditions</b> and <b>Privacy</b>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="finish">
                    <Link to="/login">
                      <Button className="signin-btn p-3">Sign In</Button>
                    </Link>
                    <Button type="submit" className="signup-btn">
                      Sign Up
                    </Button>
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

export default Signup;
