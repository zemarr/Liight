import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import logoImage from "../emblem.png";
import demoprofileimage from "../demoprofileimage.svg";
// import Button from "./Button";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/">
            <Logo logoImageHandler={logoImage} />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/loan">
                LOAN
              </Link>
            </li>
            <li>
              <Link to="/topup">
                QUICK TOP-UP
              </Link>
            </li>
            <li>
              <Link to="/login">
                <div>
                  <img src={demoprofileimage} width="30px" alt="Log in" />
                  &nbsp;&nbsp;Log in
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
