import styled from "styled-components";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const HeroRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ start }) => (start ? "flex-start" : "space-evenly")};
  margin: 0 0 1rem 0;
  height: auto;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const HeroColumn = styled.div`
  margin-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  padding: ${({padded}) => (padded ? "50px" : "")};
  flex: 1;
  max-width: 50%;
  height: ${({ imgStart }) => (imgStart ? "auto" : "calc(100vh - 20vh)")};
  flex-basis: 50%;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
  position: ${({ floater }) => (floater ? "absolute" : "relative")};

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
    justify-content: flex-start;
    padding: ${({padded}) => (padded ? "0" : "")};
  }
`;

export const CallToAction = styled.div`
  width: 100%;
  padding: 100px 0;

  h1 {
    font-weight: 700;
    color: ${({lightBg}) => (lightBg ? '#333' : '#fff')};
    font-size: 55px;
    letter-spacing: 1px;
    line-height: 60px;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    /* padding-top: 50px; */
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 425px) {
    max-width: "";
    width: 100%;
    margin: 0 auto;
    /* padding-top: 50px; */
    h1 {
      font-size: 38px;
    }
  }
`;
export const TopUpText = styled.span`
  color: #ff7810;
`;
export const LoanText = styled.span`
  color: #055e83;
`;
export const HeroButtonWrapper = styled.div`
  padding-top: 50px;
  /* padding-bottom: 10px; */
`;
export const IntroText = styled.span`
  color: #ff7810;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.7px;
  margin-bottom: 15px;
`;
export const CallForHelp = styled.span`
  color: #ff7810;
  font-weight: 600;
  font-size: 15px;
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
  background: ${({ primary }) => (primary ? "#FF9100" : "#333")};
  color: ${({ primary }) => (primary ? "#333" : "#FF9100")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "20px 64px" : "20px 32px")};
  padding: ${({ noPad }) => (noPad ? "0" : "")};
  margin-right: ${({ spaceMargin }) => (spaceMargin ? "17px" : "")};
  margin-bottom: 15px;
  font-size: 16px;
  letter-spacing: 0.7px;
  font-weight: 500;
  line-height: 10px;
  outline: none;
  border: solid 2px transparent;
  cursor: pointer;
  transition: all 0.3s ease-out;
  height: 60px;
  /* box-shadow: 0px 1px 2px 0px #333; */

  &:focus {
    outline: ${({ noOutline }) => (noOutline ? "none" : "none !important")};
    border: ${({ noOutline }) => (noOutline ? "none !important" : "")};
  }
  &:hover {
    transition: all 0.1s ease-out;
    background: ${({ primary }) => (primary ? "#FF9D1C" : "#055e83")};
    color: ${({ primary }) => (primary ? "#333" : "#fff")};
  }

  @media screen and (max-width: 425px) {
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  }
`;
