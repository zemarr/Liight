import React, { useEffect, useState } from "react";
import { Container, NavIcon, NavLogo } from "../../GlobalStyles";

import Logo from "../../img/Light-white.png";
import CloseMenuIcon from "../../img/close-black.svg";
import MenuIcon from "../../img/hamburger-black.svg";
import { Img } from "../../GlobalStyles";
import {
  MobileIcon,
  NavButtonLink,
  NavButtonWrapper,
  NavItem,
  NavItemWrapper,
  NavLinks,
  NavMenu,
  StyledHeader,
  StyledNav,
  NavButton,
} from "./Navbar.elements";

// import { IconContext } from "react-icons/lib"; // Basically took advantage of the IconContext by subscribing to the Provider
// import { HeaderObjOne } from "../../Pages/LandingPage/Data";

const Navbar = ({ lightBg }) => {
  const [click, setClick] = useState(false); // create state for clicks on the navbar (initial value = false)
  const [button, setButton] = useState(true); // create state for buttons on the navbar (initial value = true) including the hamburger and styling

  const handleClick = () => setClick(!click); // method for toggling the click state and returning a value;

  const showButton = () => {
    // method to check if the hamburger would show or not,
    if (window.innerWidth <= 768) {
      // if the width of the device on page load is less than or equal to 768px, then button should be false, else it should be true
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // It's brilliant. The way he controlled this situation. He refused that it should have one and an opposite result for a true or false statement. Instead he decided to switch the board and call the shots.
  // First he sets the button to show by default
  // Then he uses a method to say if the screen width is less than/equal to 768, the button wouldn't show. > At first I was like, this dude must be cray cray but listen to this...
  // He has two props in his component that possess different data and he wishes to show one or both of them.
  // So, he uses the tenary operator to toggle between true and false. When it is false it shows the button with only one of its style props, and when button is true, it shows the component with both style props.

  useEffect(() => {
    // useEffect hook to run on mount of this component
    showButton(); // The showButton method is fired and tracked by the state
  }, [button]);

  window.addEventListener("resize", showButton); // add an event listener to listen for window resize, any time the resize action is carried out, showButton will fire.

  return (
    <>
      <StyledHeader>
        {/* <IconContext.Provider
          value={{ color: lightTextDesc ? "#1c2237" : "#fff" }}
        > */}
        <Container>
          <StyledNav>
            <NavLogo to="/">
              <NavIcon src={Logo} alt="Liight" />
            </NavLogo>
            <NavMenu lightBg={lightBg} onClick={handleClick} click={click}>
              {" "}
              {/* Here we introduced a "click" method to pass the click state as props. This way the component's styling can have access to the value of click state. */}{" "}
              {/* Here we introduced a "click" method to pass the click state as props. This way the component's styling can have access to the value of click state. */}
              <NavItemWrapper>
                <NavItem lightBg={lightBg}>
                  <NavLinks to="/loan">Loan</NavLinks>
                </NavItem>
                <NavItem lightBg={lightBg}>
                  <NavLinks to="/topup">Quick Top-up</NavLinks>
                </NavItem>

                <NavButtonWrapper>
                  {button ? (
                    <>
                      <NavButtonLink to="/login">
                        <NavButton lightBg={lightBg}>Log in</NavButton>
                      </NavButtonLink>
                    </>
                  ) : (
                    <>
                      <NavButtonLink to="/login">
                        <NavButton
                          lightBg={lightBg}
                          big
                          fontBig
                          fullWidth
                        >
                          Log in
                        </NavButton>
                      </NavButtonLink>
                    </>
                  )}
                </NavButtonWrapper>
              </NavItemWrapper>
            </NavMenu>

            <MobileIcon onClick={handleClick}>
              {" "}
              {/* Use the handleClick method to toggle between the hamburger & close icons */}
              {click ? (
                <Img src={CloseMenuIcon} alt="" width="20px" />
              ) : (
                <Img src={MenuIcon} alt="" width="23px" />
              )}
            </MobileIcon>
          </StyledNav>
        </Container>
        {/* </IconContext.Provider> */}
      </StyledHeader>
    </>
  );
};

export default Navbar;
