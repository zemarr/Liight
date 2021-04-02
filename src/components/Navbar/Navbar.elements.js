import { Link } from "react-router-dom";
import styled from "styled-components";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const StyledHeader = styled.header`
  background: #fff;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 300;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  color: #333;
`;

export const MobileIcon = styled.div`
  display: none;
  height: 50px;

  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: 0;
    right: 0;
    transfrom: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  width: 85%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    justify-content: space-evenly;
    top: 80px;
    overflow: hidden;
    left: ${({ click }) =>
      click
        ? 0
        : "-100%"}; //we destructured an aobject to use click to take the value of click state we created in the main component. click will toggle the left position of itself between 0 and 100% when click is true or false.
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ lightBg }) => (lightBg ? "#fff" : "#333")};
  }
`;
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.5s ease;
  padding: 0 1rem;
  color: ${({ lightBg }) => (lightBg ? "#333" : "#fff")};


  @media screen and (max-width: 768px) {
    height: 60px;
    width: auto;
    border: none;

    &:hover {
      border: none;
      align-items: center;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.7px;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    color: #FF9100;
    text-decoration: none;
    transition: all 0.1s ease;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    letter-spacing: 0.9px;
    transition: all 0.3s ease;
  }
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 6px 12px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  &:hover {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const NavButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#fff" : "transparent")};
  background: ${({ secondary }) => (secondary ? "#2784C6" : "")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "20px 64px" : "12px 17px")};
  padding: ${({ noPad }) => (noPad ? "0" : "")};
  margin-right: ${({ spaceMargin }) => (spaceMargin ? "17px" : "")};
  color: ${({ lightBg }) => (lightBg ? "#333" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "18px" : "14px")};
  letter-spacing: 0.7px;
  font-weight: 400;
  line-height: 16px;
  outline: none;
  border: solid 1px ${({ lightBg }) => (lightBg ? "#333" : "#fff")};
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: ${({ noOutline }) => (noOutline ? "none" : "none !important")};
    border: ${({ noOutline }) => (noOutline ? "none !important" : "")};
  }
  &:hover {
    transition: 0.1s all;
    color: #ff9100;
    background: #333;
  }

  @media screen and (max-width: 768px) {
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  }
`;
