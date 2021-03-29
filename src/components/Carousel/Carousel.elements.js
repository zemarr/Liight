import styled from "styled-components";

export const CarouselItem = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  div {
    position: relative;
  }

  h4 {
    position: relative;
    text-align: center;
    top: 40%;
    font-size: 40px;
    color: #fbca1b;
    text-shadow: -2px 2px black;
  }
`;
export const CallToAction = styled.div`
  min-width: 50%;
  width: 50%;
  padding: 30px 0;
  position: ${({ absolute }) => (absolute ? "absolute" : "")};
  left: 150px;
  transform: translateY(100px);
  z-index: ${({ heroIndex }) => (heroIndex ? "100" : "")};

  h1 {
    font-weight: 700;
    color: #feca03;
    font-size: 60px;
  letter-spacing: 1px;
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    left: 15px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
    width: 290px;
    left: 15px;
  }
`;
export const TopUpText = styled.span`
  /* color: #feca03; */
`;
export const LoanText = styled.span`
  /* color: #f15822; */
  /* color: #feca03; */
`;
export const HeroButtonWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
`;
export const IntroText = styled.span`
  color: #fff;
  font-weight: 300;
  font-size: 25px;
  letter-spacing: 0.7px;
`;
export const CallForHelp = styled.span`
  color: #feca03;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 0.7px;

  a {
    color: inherit;
    text-decoration: none;
    letter-spacing: 0.7px;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const HeroButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#24103A" : "#fff")};
  background: ${({ secondary }) => (secondary ? "#2784C6" : "")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "20px 64px" : "20px 32px")};
  padding: ${({ noPad }) => (noPad ? "0" : "")};
  margin-right: ${({ spaceMargin }) => (spaceMargin ? "17px" : "")};
  margin-bottom: 15px;
  color: ${({ primary }) => (primary ? "#fff" : "#333")};
  font-size: ${({ fontBig }) => (fontBig ? "25px" : "18px")};
  letter-spacing: 0.7px;
  font-weight: 400;
  line-height: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:focus {
    outline: ${({ noOutline }) => (noOutline ? "none" : "none !important")};
    border: ${({ noOutline }) => (noOutline ? "none !important" : "")};
  }
  &:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({ primary }) => (primary ? "#fff" : "#24103A")};
  }

  @media screen and (max-width: 768px) {
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  }
`;

export const Slide = styled.div`
  height: calc(100vh - 16vh);
  width: 100vw;
`;
