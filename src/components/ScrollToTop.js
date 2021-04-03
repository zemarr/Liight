import React from "react";
import styled from "styled-components";

import caretUp from "../img/backtotop-alt.svg";

export const BackToTopWidget = styled.div`
  position: fixed;
  color: grey;
  right: 25px;
  bottom: 120px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;
`;

const ScrollToTop = () => {
  // set the cordinate to 0
  // make the scrolling smooth
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BackToTopWidget
        className="back-to-top animate__animated animate__fadeIn animate__fast"
        onClick={scrollTopHandler}
      >
        <img src={caretUp} height="25px" alt="" />
      </BackToTopWidget>
    </>
  );
};

export default ScrollToTop;
