import styled from "styled-components";

export const Slide = styled.div`
  height: calc(100vh - 16vh);
  width: 100vw;
`;

export const CarouselItem = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 375px) {
  }
  @media screen and (max-width: 320px) {
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  min-width: 300px;
  margin: 0 auto;
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  top: ${({ mobile }) => (mobile ? "45px" : "")};
  vertical-align: middle;
  display: inline-block;
  min-height: ${({ mobile }) => (mobile ? "auto" : "400px")};
  image-rendering: -webkit-optimize-contrast;
  transition: all 0.1s cubic-bezier(0.45, 0, 0, 1.01);

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    max-width: ${({ mobile }) => (mobile ? "100%" : "50%")};
  }

  @media screen and (max-width: 1024px) {
    display: ${({ noDisplay }) => (noDisplay ? "none" : "")};
    width: ${({ mobile }) => (mobile ? "80%" : "50%")};
  }

  @media screen and (max-width: 768px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "500px" : "")};
    /* display: ${({ imgDesktopOnly }) =>
      imgDesktopOnly ? "none" : "initial"}; */
  }
  @media screen and (max-width: 425px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "450px" : "")};
  }
  @media screen and (max-width: 375px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "350px" : "")};
  }
  @media screen and (max-width: 320px) {
    height: ${({ imgResponsive }) => (imgResponsive ? "300px" : "")};
  }
`;
