import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Input } from "../../GlobalStyles";

import auth from "../Auth";
import {
  LoginRow,
  LoginColumn,
  StyledSection,
  Img,
  SectionHeading,
  FormWrapper,
  FormHead,
  CompleteForm,
  LoginButton,
  SignupButton,
  Exit,
  FormGroup,
  FormAssist,
} from "../Login/Login.elements";

import ExitIcon from "../../img/close.svg";

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
        accountError: "Oops! No user like that. Create your account now!",
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
      <StyledSection
        noPadding
        fullViewPort
        className="login animate__animated animate__fadeIn animate__faster"
      >
        <Container fullScreen noPadding>
          <LoginRow>
            <LoginColumn className="animate__animated animate__fadeIn animate__fast">
              <FormWrapper className="formWrapper">
                <FormHead className="formHead">
                  <SectionHeading>LOG IN</SectionHeading>
                  <Exit to="/">
                    <Img src={ExitIcon} alt="" className="exit" />
                  </Exit>
                </FormHead>
                <hr />
                <form onSubmit={handleSubmit}>
                  <FormGroup className="form-group">
                    <Input
                      name="username"
                      type="text"
                      className="form-control form-control-md"
                      id="username"
                      placeholder="Username"
                      onChange={handleUsername}
                    />
                    <span
                      style={{
                        display: "block",
                        marginBottom: "15px",
                        color: "#ad0404",
                        fontSize: "11px",
                        paddingTop: "10px",
                      }}
                    >
                      {error.nameError}
                    </span>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Input
                      name="password"
                      type="password"
                      className="form-control form-control-md"
                      id="password"
                      placeholder="Password"
                      onChange={handlePassword}
                    />
                    <span
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        color: "#ad0404",
                        fontSize: "11px",
                        paddingTop: "10px",
                      }}
                    >
                      {error.passwordError}
                    </span>
                  </FormGroup>
                  <span
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      color: "#ad0404",
                      fontSize: "11px",
                    }}
                  >
                    {error.accountError}
                  </span>
                  <FormAssist className="form-assist">
                    <button onClick={(e) => e.preventDefault()}>
                      Can't access your account?
                    </button>
                    <button onClick={(e) => e.preventDefault()}>
                      Forgot Password?
                    </button>
                  </FormAssist>
                  <CompleteForm>
                    {" "}
                    <LoginButton
                      className="signin-btn p-3"
                      onClick={handleSubmit}
                    >
                      Login
                    </LoginButton>
                    <Link to="/sign-up">
                      <SignupButton className="signup-btn">
                        Sign Up
                      </SignupButton>
                    </Link>
                  </CompleteForm>
                </form>
              </FormWrapper>
            </LoginColumn>
          </LoginRow>
        </Container>
      </StyledSection>
    </>
  );
};

export default Login;
