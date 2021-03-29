import React, { useState, useEffect } from "react";
import styled from "styled-components";

import caretUp from "../img/backtotop.svg";

export const BackToTopWidget = styled.div`
  position: fixed;
  color: grey;
  right: 10px;
  bottom: 90px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  //  Show wheen the page is scrolled a particular distance
  const toggleVisibility = () => {
    window.pageYOffset > 900 ? setVisible(true) : setVisible(false);
  };

  // set the cordinate to 0
  // make the scrolling smooth
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useEffect to make changes to components on state change
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {visible && (
        <BackToTopWidget
          className="back-to-top animate__animated animate__fadeIn animate__fast"
          onClick={scrollTopHandler}
        >
          <img src={caretUp} height="11px" alt="" />
          Back to Top
        </BackToTopWidget>
      )}
    </>
  );
};

export default ScrollToTop;
