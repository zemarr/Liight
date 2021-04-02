import styled from "styled-components";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const ServiceRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const ServiceColumn = styled.div`
  margin: 5px 0;
  padding-right: 0;
  padding-left: 0;
  flex: 1;
  max-width: 18%;
  flex-basis: 18%;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  /* box-shadow: 0 5px 10px -7px rgb(0 0 0 / 34%); */

  @media screen and (max-width: 768px) {
    max-width: 20%;
    flex-basis: 20%;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 425px) and (max-width: 650px) {
    max-width: 25%;
    flex-basis: 25%;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 425px) {
    max-width: 45%;
    flex-basis: 45%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 375px) {
    max-width: 45%;
    flex-basis: 45%;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 320px) {
    max-width: 50%;
    flex-basis: 50%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 80px;
  overflow: hidden;
  position: ${({ floating }) => (floating ? "relative" : "")};
  /* padding: ${({ padded }) => (padded ? ".5rem" : "")}; */
  background-color: ${({ primary }) => (primary ? "#fff" : "transparent")};
  border-radius: 6px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100px;
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  top: ${({ mobile }) => (mobile ? "45px" : "")};
  vertical-align: middle;
  display: inline-block;
  max-height: ${({ mobile }) => (mobile ? "400px" : "")};
  image-rendering: -webkit-optimize-contrast;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "30px" : "")};
  transition: all 0.1s cubic-bezier(0.45, 0, 0, 1.01);
`;
