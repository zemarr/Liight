import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button {...props}>
      <div className={"prev"}></div>
    </button>
  );
  const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button {...props}>
      <div className={"next"}></div>
    </button>
  );

  const settings = {
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <>
      <div className="container-fluid">
        <Slider
          {...settings}
          dots={true}
          infinite={true}
          slidesToScroll={1}
          arrows={true}
          slidesToShow={1}
          autoplay={true}
          autoplaySpeed={5000}
          speed={1000}
          cssEase="linear"
          fade={!0}
          draggable={false}
          className="hero-carousel"
        >
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="slide1 img-responsive"></div>
            </div>
            <h4 className="p-1">EXPERIENCE THE BRIGHTER SIDE OF LIFE</h4>
          </div>
          <div className="carousel-item">
            <div className="slide2 img-responsive"></div>
            <h4 className="p-1">24 HOURS CUSTOMER SUPPORT</h4>
          </div>
          <div className="carousel-item">
            <div className="slide3 img-responsive"></div>
            <h4 className="p-1">SECURED PAYMENT</h4>
          </div>
          <div className="carousel-item">
            <div className="slide4 img-responsive"></div>
            <h4 className="p-1">BUY NOW AND PAY LATER</h4>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
