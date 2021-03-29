import React from "react";

const Logo = ({ logoImageHandler }) => {
  return (
    <img
      src={logoImageHandler}
      className="img-responsive"
      height="100%"
      alt="Liight"
    />
  );
};

export default Logo;
