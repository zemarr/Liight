import styled from "styled-components";

export const SectionSubHeading = styled.p`
  font-weight: 300;
  font-size: 15px;
  color: #333;
  margin: 15px 0;
  padding: 0;
  text-align: center;
`;

export const MobileRow = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  min-width: 290px;
  max-width: 450px;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
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
    justify-content: center;
    align-items: center;
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
