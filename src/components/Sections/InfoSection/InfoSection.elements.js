import styled from "styled-components";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({start}) => (start ? 'flex-start' : 'space-evenly')};
  margin: 0 0 1rem 0;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  flex: 1;
  max-width: 30%;
  flex-basis: 30%;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
  position: ${({ floater }) => (floater ? "absolute" : "relative")};

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  max-height: 300px;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* background: #fbca1b; */
  /* box-shadow: 0 5px 10px -7px rgb(0 0 0 / 34%); */
`;

export const ImgWrapper = styled.div`
  width: 55px;
  max-height: 55px;
  overflow: hidden;
  position: ${({ floating }) => (floating ? "relative" : "")};
  padding: ${({ padded }) => (padded ? ".5rem" : "")};
  background-color: ${({ primary }) => (primary ? "#FF9A16" : "")};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const SubHeading = styled.h5`
  /* text-align: center; */
  font-weight: 600;
  font-size: 20px;
  color: #38311c;
`;

export const SubText = styled.p`
  /* text-align: center; */
  font-size: 15px;
  color: #38311c;
`;
