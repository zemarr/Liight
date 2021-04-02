import { Link } from "react-router-dom";
import styled from "styled-components";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const FooterColumn = styled.div`
  /* min-height: 200px; */
  padding-right: 0;
  padding-left: 0;
  flex: 1;
  max-width: 18%;
  flex-basis: 18%;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "")};
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  color: inherit;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 80px;
  overflow: hidden;
  position: ${({ floating }) => (floating ? "relative" : "")};
  padding: ${({ padded }) => (padded ? ".5rem" : "")};
  background-color: ${({ primary }) => (primary ? "#fff" : "transparent")};
  border-radius: 6px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FooterLogo = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  position: ${({ floater }) => (floater ? "absolute" : "relative")};
  top: ${({ mobile }) => (mobile ? "45px" : "")};
  vertical-align: middle;
  display: inline-block;
  height: 100%;
  image-rendering: auto;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "30px" : "")};
  transition: all 0.1s cubic-bezier(0.45, 0, 0, 1.01);

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    max-width: ${({ mobile }) => (mobile ? "50%" : "100%")};
  }

  @media screen and (max-width: 1024px) {
    display: ${({ noDisplay }) => (noDisplay ? "none" : "")};
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

export const Copyright = styled.span`
  font-size: 12px;
  letter-spacing: .7px;
  color: inherit;
`;

export const FooterLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({lightBg}) => (lightBg ? "#333" : "#fff")};
`;
export const FooterSubHeading = styled.p`
  margin-bottom: 16px;
  color: inherit;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: .7px;
`;

export const FooterLinksItem = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: .7px;
  color: inherit;
  margin-right: 15px;
  transition: 0.3s ease-out;

  &:hover {
    transition: 0.1s ease-out;
    text-decoration: none;
    color: #FF9100;
  }
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;

  @media screen and (max-width: 820px) {
    /* flex-direction: column; */
  }
`;

export const FooterMailTo = styled.a`
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: inherit;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .7px;

  &:hover {
    transition: 0.3s ease-out;
    text-decoration: none;
    color: #FF9100;
  }
`;

export const SocialsLogo = styled.img`
  width: 35px;
  height: 35px;
  margin: 0;
  padding: 0;
`;
