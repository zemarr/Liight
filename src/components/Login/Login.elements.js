import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginBackground from "../../img/loginbackground.svg";

export const StyledSection = styled("section")`
  background: ${({ primary }) => (primary ? "#24103A" : "transparent")};
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${LoginBackground}); */
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

export const LoginRow = styled.div`
  height: 100%;
  /* justify-content: center !important; */
  display: flex !important;
  /* align-items: center !important; */

  @media screen and (max-width: 420px) {
  }
`;

export const LoginColumn = styled.div`
  padding-right: 0;
  padding-left: 0;
  padding-top: 40px;
  display: flex;
  flex: 1;
  max-width: 43%;
  flex-basis: 43%;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
  justify-content: ${({ vertical }) => (vertical ? "start" : "center")};
  align-items: center;
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
  }
`;

export const ImgWrapper = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;
export const Img = styled.img`
  width: 100%;
  position: relative;

  @media screen and (max-width: 670px) {
    width: inherit;
    height: 100%;
  }
`;

export const SectionHeading = styled.h4`
  font-weight: ${({ bold }) => (bold ? "700" : "600")};
  display: flex;
  width: fit-content;
  align-items: center;
  position: relative;
  font-size: 20px;
  margin-bottom: 25px;

  @media screen and (max-width: 320px) {
    font-size: 21px;
  }
`;

export const FormWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.36);
  padding: 40px 35px;
  box-shadow: 0 0 2px #00000052;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const HeadLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;

  img {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    /* position: relative;
    top: 0; */
  }
`;
export const Exit = styled(Link)`
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 0;
  top: 50px;

  @media screen and (max-width: 1200px) {
    margin-right: 50px;
  }
  @media screen and (max-width: 425px) {
    margin-right: 25px;
    width: 30px;
  }
`;
export const FormGroup = styled.div`
  min-width: 245px;
`;
export const Label = styled.label`
  font-weight: 600;
  font-size: 15px;
`;
export const ErrorLabel = styled.span`
  display: block;
  margin-bottom: 5px;
  color: #ad0404;
  font-size: 11px;
  padding-top: 10px;
`;
export const FormAssist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 15px;

  p {
    font-family: "Roboto", sans-serif;
    /* display: block; */
    padding: 0;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 13px;
    color: #a8a8a8;

    a {
      color: #a8a8a8;
    }

    @media screen and (max-width: 425px) {
      /* font-size: 13px; */
    }
  }
`;
export const CompleteForm = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    &:focus {
      outline: none;
    }
  }
`;
export const LoginButton = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #ff902e;
  font-weight: 500;
  font-size: 16px;
  border: none;
  color: #fff;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    font-weight: 400;
    font-size: 15px;
  }
`;
export const SignupButton = styled.button`
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
