import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
// import { FaMagento } from "react-icons/fa";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

const GlobalStyle = createGlobalStyle`
* {
  text-rendering: optimizeSpeed;
}

body { 
  background: #fff;
}

a {
  font-family: 'Roboto', sans-serif;
  text-rendering: optimizeSpeed;
}

p {
  font-family: 'PT Sans', sans-serif;
  text-rendering: optimizeSpeed;
  letter-spacing: .7px;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  height: ${({ fullScreen }) => (fullScreen ? "100vh" : "inherit")};
  margin: 0 auto;
  position: relative;
  /* transform: ${({ centered }) => (centered ? "translateY(50%)" : "")}; */

  @media screen and (max-width: 1235px) {
    padding: ${({ noPadding }) => (noPadding ? "" : "0 1.0875rem")};
  }

  @media screen and (max-width: 768px) {
    transform: none;
  }
`;

export const ContainerFluid = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: ${({ marginTop }) => (marginTop ? "70px" : "")};
  position: relative;

  @media screen and (max-width: 1235px) {
    padding: ${({ mobilePadding }) => (mobilePadding ? "0 1.0875rem" : "")};
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-start;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;
export const NavIcon = styled.img`
  margin-right: 0.5rem;
  height: 60px;
  width: auto;
  image-rendering: optimizeQuality;
`;
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#fff" : "transparent")};
  background: ${({ secondary }) => (secondary ? "#2784C6" : "")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "20px 64px" : "13px 17px")};
  padding: ${({ noPad }) => (noPad ? "0" : "")};
  margin-right: ${({ spaceMargin }) => (spaceMargin ? "17px" : "")};
  color: ${({ primary }) => (primary ? "#2f0743" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "17px")};
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 16px;
  outline: none;
  border: solid 1px #fff;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:focus {
    outline: ${({ noOutline }) => (noOutline ? "none" : "none !important")};
    border: ${({ noOutline }) => (noOutline ? "none !important" : "")};
  }
  &:hover {
    transition: all 0.3s ease-out;
    color: #2f0743;
    background: #fff;
    /* background: ${({ primary }) => (primary ? "#0467fb" : "#4b59f7")}; */
  }

  @media screen and (max-width: 768px) {
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  }
`;

export const StyledSection = styled("section")`
  background: ${({ lightBg }) => (lightBg ? "" : "#333")};
  background: ${({ primary }) => (primary ? "#eaeaea" : "#fff")};
  padding-top: ${({ mediumPaddingTop }) =>
    mediumPaddingTop ? "100px" : "50px"};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? "100px" : "50px")};
  padding-bottom: ${({ noPaddingBottom }) =>
    noPaddingBottom ? "0px" : "50px"};
  padding: ${({ noPadding }) => (noPadding ? "0" : "")};
  position: ${({ relative }) => (relative ? "relative" : "")};
  height: ${({ ViewPort }) => (ViewPort ? "calc(100vh - 10vh)" : "")};
  height: ${({ fullViewPort }) => (fullViewPort ? "100vh" : "")};

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  top: ${({ mobile }) => (mobile ? "45px" : "")};
  vertical-align: middle;
  display: inline-block;
  max-height: ${({ mobile }) => (mobile ? "400px" : "500px")};
  image-rendering: -webkit-optimize-contrast;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "30px" : "")};
  transition: all 0.1s cubic-bezier(0.45, 0, 0, 1.01);

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    max-width: ${({ mobile }) => (mobile ? "50%" : "100%")};
  }

  @media screen and (max-width: 1024px) {
    display: ${({ noDisplay }) => (noDisplay ? "none" : "")};
  }

  @media screen and (max-width: 768px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "500px" : "")};
    /* display: ${({ imgDesktopOnly }) =>
      imgDesktopOnly ? "none" : "initial"}; */
  }
  @media screen and (max-width: 425px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "450px" : "")};
  }
  @media screen and (max-width: 375px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "350px" : "")};
  }
  @media screen and (max-width: 320px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "300px" : "")};
  }
`;

export const SectionHeading = styled.h4`
  font-weight: ${({ bold }) => (bold ? "700" : "600")};
  display: flex;
  width: fit-content;
  align-items: center;
  position: relative;
  margin: 0 auto;

  &::after {
    content: "";
    height: 3px;
    width: 100%;
    transform: skew(45deg, 0deg);
    background: #ff9a16;
    position: absolute;
    bottom: 0;
    left: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 21px;
  }
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
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
`;

export const Hr = styled.div`
  border-top: solid 0.5px #d6d6d6;
  width: ${({ halfWidth }) => (halfWidth ? "30%" : "100%")};
  margin: 0 auto;
`;

export default GlobalStyle;
