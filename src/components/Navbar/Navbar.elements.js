import { Link } from "react-router-dom";
import styled from "styled-components";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  color: #fff;
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
    background: #24103a;
  }
`;
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.5s ease;
  padding: 0 1rem;

  /* &:hover {
    border-bottom: 2px solid #fff;
    transition: all 0.5s ease;
  } */

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
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: .7px;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    color: #FECA03;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    letter-spacing: .9px;
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
  padding: ${({ big }) => (big ? "20px 64px" : "15px 17px")};
  padding: ${({ noPad }) => (noPad ? "0" : "")};
  margin-right: ${({ spaceMargin }) => (spaceMargin ? "17px" : "")};
  color: ${({ primary }) => (primary ? "#2f0743" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "18px" : "15px")};
  letter-spacing: .7px;
  font-weight: 300;
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
