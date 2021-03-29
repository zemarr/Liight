import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Carousel.css";
import {
  CarouselItem,
  CallToAction,
  HeroButtonWrapper,
  IntroText,
  TopUpText,
  LoanText,
  CallForHelp,
  HeroButton,
} from "./Carousel.elements";
import { ContainerFluid } from "../../GlobalStyles";

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
        <CallToAction absolute heroIndex className="callToAction">
          <IntroText>What would you like to do?</IntroText>
          <h1>
            Energy <TopUpText>top-up</TopUpText>
          </h1>
          <h1>
            Request a <LoanText>loan</LoanText>
          </h1>
          <HeroButtonWrapper>
            <HeroButton spaceMargin fullWidth>
              Top-up Now
            </HeroButton>
            <HeroButton spaceMargin fullWidth>
              Energy Loan
            </HeroButton>
          </HeroButtonWrapper>
          <CallForHelp>
            For help! Call <a href="tel: +23408066434176">0806 643 4176</a>
          </CallForHelp>
        </CallToAction>
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
          <CarouselItem>
            <div className="slide1 img-responsive"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="slide2 img-responsive"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="slide3 img-responsive"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="slide4 img-responsive"></div>
          </CarouselItem>
        </Slider>
      </ContainerFluid>
    </>
  );
};

export default Carousel;
