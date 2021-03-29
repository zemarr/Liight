import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Container } from "../../GlobalStyles";
import {
  FormWrapper,
  FormHead,
  StyledSection,
  Exit,
  Img,
  SignupRow,
  FormGroup,
  Category,
  RadioWrapper,
  RadioGroup,
  CompleteForm,
  LoginButton,
  SignupButton,
} from "./Signup.elements";
import ExitIcon from "../../img/close.svg";
import RadioInput from "../RadioInput";
import CheckBoxInput from "../CheckBoxInput";

const Signup = () => {
  const [category, setCategory] = useState();
  const [acceptTerms, setAcceptTerms] = useState();

  return (
    <>
      <StyledSection
        noPadding
        className="signup animate__animated animate__fadeIn animate__faster"
      >
        <Container fullScreen noPadding>
          <SignupRow className="row">
            <div className="col-md-8 animate__animated animate__fadeIn animate__fast">
              <FormWrapper className="formWrapper">
                <FormHead className="formHead">
                  {/* <Heading> */}
                  <h4>SIGN UP</h4>
                  {/* </Heading> */}
                  <Exit to="/">
                    <Img src={ExitIcon} alt="" className="exit" />
                  </Exit>
                </FormHead>
                <hr />

                <form>
                  <div className="form-row">
                    <FormGroup className="form-group col-md-6 name">
                      <input
                        name="username"
                        type="username"
                        className="form-control form-control-md"
                        id="username"
                        placeholder="Username"
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form-group col-md-6 mobile">
                      <input
                        name="phone"
                        type="number"
                        className="form-control form-control-md"
                        id="phone"
                        placeholder="Phone number"
                      />
                    </FormGroup>
                  </div>
                  <FormGroup className="form-group meter-no">
                    <input
                      name="meterNumber"
                      type="text"
                      className="form-control form-control-md"
                      id="meterNumber"
                      placeholder="Meter Number"
                    />
                  </FormGroup>
                  <FormGroup className="form-group email">
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control-md"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </FormGroup>
                  <div className="form-row">
                    <FormGroup className="form-group col-md-6">
                      <input
                        name="password"
                        type="password"
                        className="form-control form-control-md"
                        id="password"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <FormGroup className="form-group col-md-6 confirm">
                      <input
                        name="confirmPassword"
                        type="password"
                        className="form-control form-control-md"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </FormGroup>
                  </div>
                  <RadioWrapper>
                    <Category className="category">
                      <RadioGroup className="radio-group">
                        <RadioInput
                          label="Household"
                          value="houseHold"
                          checked={category}
                          setter={setCategory}
                        />
                        <RadioInput
                          label="Company"
                          value="company"
                          checked={category}
                          setter={setCategory}
                        />
                      </RadioGroup>
                    </Category>
                    <div className="form-group">
                      <CheckBoxInput
                        value="termsAndConditions"
                        checked={acceptTerms}
                        setter={setAcceptTerms}
                      />
                    </div>
                  </RadioWrapper>
                  <CompleteForm>
                    <Link to="/login">
                      <LoginButton className="signin-btn">
                        Sign In
                      </LoginButton>
                    </Link>
                    <SignupButton type="submit" className="signup-btn  p-3">
                      Sign Up
                    </SignupButton>
                  </CompleteForm>
                </form>
              </FormWrapper>
            </div>
          </SignupRow>
        </Container>
      </StyledSection>
    </>
  );
};

export default Signup;
