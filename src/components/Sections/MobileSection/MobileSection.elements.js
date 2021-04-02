import styled from "styled-components";

export const SectionHeading = styled.h4`
  font-weight: ${({ bold }) => (bold ? "700" : "600")};
  font-size: ${({ bold }) => (bold ? "30px" : "25px")};
  letter-spacing: -1px;
  color: inherit;
  margin-bottom: 0;

  @media screen and (max-width: 413px) {
    font-size: 25px;
  }
  @media screen and (max-width: 320px) {
    font-size: 22px;
  }
`;

export const SectionSubHeading = styled.p`
  font-weight: 300;
  font-size: 15px;
  color: #333;
  margin-bottom: 30px;
  padding: 0;
`;

export const MobileRow = styled.div`
  display: flex;
  min-width: 290px;
  max-width: 350px;
  align-items: center;
  justify-content: space-around;
  /* margin: 0 auto; */
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const MobileColumn = styled.div`
  margin-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  width: auto;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  overflow: hidden;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (min-width: 425px) and (max-width: 460px) {
    max-width: 40%;
    flex-basis: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    max-width: 45%;
    flex-basis: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  position: ${({ floating }) => (floating ? "relative" : "absolute")};
  bottom: ${({ floating }) => (floating ? "-40px" : "")};
  padding: ${({ padded }) => (padded ? ".5rem" : "")};
  background-color: ${({ primary }) => (primary ? "#fbca1b" : "")};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 330px;
  margin-top: 25px;
  padding-top: 0;
  padding-top: 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    max-width: 70%;
    margin: 0 auto;
    padding-top: 30px;
  }

  @media screen and (max-width: 562px) {
    max-width: 100%;
    padding-top: 30px;
  }
`;
