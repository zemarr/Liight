import React, { useState, useEffect } from "react";

import caretUp from "../backtotop.svg";

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
        <div className="back-to-top animate__animated animate__fadeIn animate__fast" onClick={scrollTopHandler}>
          <img src={caretUp} height="15px" alt="Back to Top" />
          Back to Top
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
