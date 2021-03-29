import React from "react";
import { Link } from "react-router-dom";
import { Container, Input } from "../../GlobalStyles";
import ExitIcon from "../../img/close.svg";
import {
  StyledSection,
  LoginRow,
  LoginColumn,
  FormWrapper,
  FormHead,
  SectionHeading,
  Exit,
  Img,
  FormGroup,
  CompleteForm,
  TopupButton,
  LoanButton,
} from "./QuickTopup.elements";

const QuickTopup = () => {
  return (
    <>
      <StyledSection
        noPadding
        fullViewPort
        className="quicktopup animate__animated animate__fadeIn animate__faster"
      >
        <Container fullScreen>
          <LoginRow className="row">
            <LoginColumn className="animate__animated column animate__fadeIn animate__fast">
              <FormWrapper className="formWrapper">
                <FormHead className="formHead">
                  <SectionHeading>TOP UP</SectionHeading>
                  <Exit to="/">
                    <Img src={ExitIcon} alt="" className="exit" />
                  </Exit>
                </FormHead>
                <hr />
                <form>
                  <FormGroup className="form-group">
                    <Input
                      type="text"
                      className="form-control form-control-md"
                      id="meter-number"
                      placeholder="Meter Number"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Input
                      type="text"
                      className="form-control form-control-md"
                      id="phone-number"
                      placeholder="Phone Number"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Input
                      type="text"
                      className="form-control form-control-md"
                      id="topup-amount"
                      placeholder="Amount"
                    />
                  </FormGroup>
                  <CompleteForm>
                    {" "}
                    <TopupButton
                      className="p-3"
                      onClick={(e) => e.preventDefault()}
                    >
                      Top Up
                    </TopupButton>
                    <Link to="/loan">
                      <LoanButton>Loan</LoanButton>
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

export default QuickTopup;
