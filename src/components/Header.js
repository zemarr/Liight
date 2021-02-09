import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import logoImage from "../emblem.png";
import demoprofileimage from "../demoprofileimage.svg";
import hamburger from "../hamburger.svg";
import hamburgerClose from "../close-hamburger.svg";

const Header = (props) => {
  const [active, setActive] = useState(false); // This state belongs to the navigation responsive hamburger
  const [scroll, setScroll] = useState(false); // This stores the scroll state of the webpage

  const toggleActiveNav = () => {
    // A helper function that toggles the state of the hamburger between true and false
    setActive(!active);
  };

  const toggleHeader = () => {
    // A helper function that changes the state between true and false based on the document's scroll state.
    if (window.pageYOffset === 0) {
      setScroll(false);
    } else if (window.pageYOffset < 480 && window.pageYOffset !== 0) {
      setScroll(false);
    } else if (window.pageYOffset > 480) {
      setScroll(true);
    } else {
      setScroll(true);
    }
  };

  useEffect(() => {
    // A useEffect hook used to add an event listener to the document body. It is important for tracking the scroll distance to the top
    window.addEventListener("scroll", toggleHeader);
  }, []);

  return (
    // Here we will refer to the scroll state and make use of the data to add and remove our active className
    // There are also animation classes included for smoother transitioning and aesthetics
    <header
      className={
        scroll
          ? "header active animate__animated animate__slideInDown"
          : "header"
      }
    >
      <div className="container">
        <div
          className="logo-wrapper animate__animated animate__fadeInLeft"
          data-wow-delay=".1s"
        >
          <Link to="/">
            <Logo logoImageHandler={logoImage} />
          </Link>
        </div>
        {/* Use the Hamburger active state to toggle active className. Useful for the mobile responsive navbar */}
        <nav className={active ? "active" : ""}>
          <div className="container">
            <ul>
              <li className=" animate__animated animate__fadeIn">
                <Link to="/loan">LOAN</Link>
              </li>
              <li className=" animate__animated animate__fadeIn">
                <Link to="/topup">QUICK TOP-UP</Link>
              </li>
              <li className=" animate__animated animate__fadeIn">
                <Link to={props.to}>
                  <button onClick={props.onClick}>
                    {/* Also used the hamburger active state to toggle the icon for the login button */}
                    <img
                      src={demoprofileimage}
                      width={active ? "25px" : "30px"}
                      alt="Log in"
                    />
                    &nbsp;&nbsp;{props.authLabel}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* We use the helper function 'toggleActiveNav' to toggle between hamburger icon and close hamburger icon */}
        <div
          className="hamburger wow animate__animated animate__fadeIn animate__delay-1s"
          onClick={toggleActiveNav}
        >
          {active ? (
            <img
              src={hamburgerClose}
              alt=""
              width="40px"
              height="20px"
              className="animate__animated animate__fadeIn animate__faster"
            />
          ) : (
            <img
              src={hamburger}
              alt=""
              width="40px"
              height="30px"
              className="animate__animated animate__fadeIn animate__faster"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
