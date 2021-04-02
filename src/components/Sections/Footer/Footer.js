import React from "react";
// import { Facebook, Instagram, Twitter } from "react-icons/fa";
import { Container, StyledSection } from "../../../GlobalStyles";
import {
  ImgWrapper,
  FooterRow,
  FooterColumn,
  Copyright,
  FooterLogo,
  FooterLinksWrapper,
  FooterSubHeading,
  FooterLinksItem,
  SocialMediaWrapper,
  SocialsLogo,
  FooterMailTo,
} from "./Footer.elements";
import footerLogo from "../../../img/Light-white.png";

import facebookLogo from "../../../img/facebook.svg";
import twitterLogo from "../../../img/twitter.svg";
import instagramLogo from "../../../img/instagram.svg";

const Footer = ({
  lightBg,
  footerLearn,
  learnLink1,
  learnLink2,
  footerLegal,
  legalLink1,
  legalLink2,
  footerContact,
}) => {
  return (
    <>
      <StyledSection primary mediumPaddingTop lightBg={lightBg}>
        <Container>
          <FooterRow>
            <FooterColumn vertical>
              <ImgWrapper>
                <FooterLogo src={footerLogo} alt="" />
              </ImgWrapper>
              <Copyright>&copy;2021 All rights reserved</Copyright>
            </FooterColumn>
            <FooterColumn>
              <FooterLinksWrapper lightBg={lightBg}>
                <FooterSubHeading>{footerLearn}</FooterSubHeading>
                <FooterLinksItem to="/blog">{learnLink1}</FooterLinksItem>
                <FooterLinksItem to="/faqs">{learnLink2}</FooterLinksItem>
              </FooterLinksWrapper>
            </FooterColumn>
            <FooterColumn>
              <FooterLinksWrapper lightBg={lightBg}>
                <FooterSubHeading>{footerLegal}</FooterSubHeading>
                <FooterLinksItem to="/terms-of-use">
                  {legalLink1}
                </FooterLinksItem>
                <FooterLinksItem to="/privacy-policy">
                  {legalLink2}
                </FooterLinksItem>
              </FooterLinksWrapper>
            </FooterColumn>
            <FooterColumn>
              <FooterLinksWrapper lightBg={lightBg}>
                <FooterSubHeading>{footerContact}</FooterSubHeading>
                <FooterMailTo href="mailto: hello@Liight.com.ng">
                  hello@Liight.com.ng
                </FooterMailTo>
                <SocialMediaWrapper>
                  <FooterLinksItem to="/#facebook">
                    <SocialsLogo src={facebookLogo} />
                  </FooterLinksItem>
                  <FooterLinksItem to="/#twitter">
                    <SocialsLogo src={twitterLogo} />
                  </FooterLinksItem>
                  <FooterLinksItem to="/#instagram">
                    <SocialsLogo src={instagramLogo} />
                  </FooterLinksItem>
                </SocialMediaWrapper>
              </FooterLinksWrapper>
            </FooterColumn>
          </FooterRow>
        </Container>
      </StyledSection>
    </>
  );
};

export default Footer;
