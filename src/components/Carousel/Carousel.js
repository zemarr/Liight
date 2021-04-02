import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Carousel.css";
import { CarouselItem, Img } from "./Carousel.elements";
import { ContainerFluid } from "../../GlobalStyles";

import slide1 from '../../img/undraw_suburbs.svg';
import slide2 from '../../img/undraw_dynamic_night.svg';
import slide3 from '../../img/undraw_Support_team.svg';
import slide4 from '../../img/undraw_pay_online.svg';

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
      <ContainerFluid>
        <Slider
          {...settings}
          dots={true}
          infinite={true}
          slidesToScroll={1}
          arrows={true}
          slidesToShow={1}
          autoplay={true}
          autoplaySpeed={5000}
          speed={2000}
          cssEase="linear"
          fade={!0}
          draggable={false}
          className="hero-carousel"
        >
          <CarouselItem>
            <div style={{height: "400px", overflow: "hidden", paddingTop: "0px"}}>
              <Img mobile src={slide1} alt="" height="300px" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div style={{height: "400px", overflow: "hidden", paddingTop: "0px"}}>
              <Img mobile src={slide2} alt="" height="300px" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div style={{height: "400px", overflow: "hidden", paddingTop: "0px"}}>
              <Img mobile src={slide3} alt="" height="300px" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div style={{height: "400px", overflow: "hidden", paddingTop: "0px"}}>
              <Img mobile src={slide4} alt="" height="300px" />
            </div>
          </CarouselItem>
        </Slider>
      </ContainerFluid>
    </>
  );
};

export default Carousel;
