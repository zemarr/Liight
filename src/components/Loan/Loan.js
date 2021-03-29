import React from "react";
import { Link } from "react-router-dom";

import { Container, Input } from "../../GlobalStyles";
import ExitIcon from "../../img/close.svg";
import {
  StyledSection,
  LoanRow,
  LoanColumn,
  FormWrapper,
  FormHead,
  SectionHeading,
  Exit,
  Img,
  FormGroup,
  CompleteForm,
  TopupButton,
  LoanButton,
} from "./Loan.elements";

const Loan = () => {
  return (
    <>
      <StyledSection
        noPadding
        fullViewPort
        className="loan animate__animated animate__fadeIn animate__faster"
      >
        <Container fullScreen noPadding>
          <LoanRow>
            <LoanColumn className="]animate__animated animate__fadeIn animate__fast">
              <FormWrapper className="formWrapper">
                <FormHead className="formHead">
                  <SectionHeading>LOAN</SectionHeading>
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
                      type="tel"
                      className="form-control form-control-md"
                      id="phone-number"
                      placeholder="Phone Number"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Input
                      type="text"
                      className="form-control form-control-md"
                      id="bvn"
                      placeholder="BVN"
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
                    <Link to="/topup">
                      <TopupButton type="submit">Top Up</TopupButton>
                    </Link>
                    <LoanButton
                      className="p-3"
                      onClick={(e) => e.preventDefault()}
                    >
                      Recharge
                    </LoanButton>
                  </CompleteForm>
                </form>
              </FormWrapper>
            </LoanColumn>
          </LoanRow>
        </Container>
      </StyledSection>
    </>
  );
};

export default Loan;
