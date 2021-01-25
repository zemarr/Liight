import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import logoImage from "../emblem.png";
import demoprofileimage from "../demoprofileimage.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/">
            <Logo logoImageHandler={logoImage} />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/login">
                <div>
                  <img src={demoprofileimage} width="30px" alt="Log in" />
                  &nbsp;&nbsp;LOG IN
                </div>
              </Link>
            </li>
            <li>
              <Link to="/topup">
                <Button className="topup-btn p-2">QUICK TOP-UP/LOAN</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
