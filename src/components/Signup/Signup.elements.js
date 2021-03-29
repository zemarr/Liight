import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginBackground from "../../img/loginbackground.svg";

export const StyledSection = styled("section")`
  background: ${({ primary }) => (primary ? "#24103A" : "transparent")};
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${LoginBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  padding-top: ${({ mediumPaddingTop }) =>
    mediumPaddingTop ? "100px" : "50px"};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? "100px" : "50px")};
  padding: ${({ noPadding }) => (noPadding ? "0" : "")};
  position: ${({ relative }) => (relative ? "relative" : "")};
  height: ${({ ViewPort }) => (ViewPort ? "calc(100vh - 20vh)" : "")};
  height: ${({ fullViewPort }) => (fullViewPort ? "100vh" : "")};
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const SignupRow = styled.div`
  height: 100%;
  justify-content: center !important;
  display: flex !important;
  align-items: center !important;

  @media screen and (max-width: 420px) {
  }
`;

export const SignupColumn = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  flex: 1;
  max-width: 40%;
  flex-basis: 40%;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  height: fit-content;
  top: 100px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const SectionHeading = styled.h4`
  font-weight: ${({ bold }) => (bold ? "700" : "600")};
  display: flex;
  width: fit-content;
  align-items: center;
  position: relative;

  @media screen and (max-width: 320px) {
    font-size: 21px;
  }
`;

export const FormWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.36);
  padding: 60px 60px;
  box-shadow: 9px 9px 19px -5px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 9px 9px 19px -5px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 9px 9px 19px -5px rgba(0, 0, 0, 0.59);
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const FormHead = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Exit = styled(Link)`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100%;
  position: relative;

  @media screen and (max-width: 670px) {
    width: inherit;
    height: 100%;
  }
`;

export const FormGroup = styled.div`
  input {
    box-shadow: 9px 9px 19px -5px rgba(0, 0, 0, 0.233);
    -webkit-box-shadow: 9px 9px 19px -5px rgba(0, 0, 0, 0.233);
    -moz-box-shadow: 9px 9px 19px -5px rgba(0, 0, 0, 0.233);
    display: block;
    width: 100%;
    /* height: 45px; */
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

export const RadioWrapper = styled.div`
  padding: 0 1rem;

  @media screen and (max-width: 320px) {
    padding: 0;
  }
`;
export const RadioGroup = styled.div`
  /* padding: 0 20px; */

  label {
    font-size: 15px;
    font-weight: 400;
  }
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
`;

export const CompleteForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    margin-left: 0;
    margin-right: 15px;
  }

  button {
    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 325px) {
  }
`;
export const SignupButton = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #54965a;
  height: 54px;
  font-weight: 400;
  font-size: 17px;
  border: none;
  color: #fff;
  border-radius: 10px;

  @media screen and (max-width: 425px) {
    font-weight: 400;
    font-size: 15px;
  }
`;
export const LoginButton = styled.button`
  font-family: "Roboto", sans-serif;
  height: 54px;
  margin-left: 15px;
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 17px;
  color: $primary-font-color;
  box-shadow: none;

  @media screen and (max-width: 425px) {
    font-weight: 600;
    font-size: 15px;
  }
`;
