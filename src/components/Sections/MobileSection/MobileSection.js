import React from "react";
import { Container, Img, StyledSection } from "../../../GlobalStyles";
import {
  MobileColumn,
  MobileRow,
  SectionHeading,
  SectionSubHeading,
  ImgWrapper,
} from "./MobileSection.elements";
import GooglePlay from "../../../img/googleplay.svg";
import AppStore from "../../../img/appstore.svg";
import mobileAppImg from "../../../img/undraw_secure.svg";
import { HeroColumn, HeroRow } from "../Hero/Hero.elements";

const MobileApp = ({ lightBg, sectionHeading, sectionSubHeading }) => {
  return (
    <>
      <StyledSection
        primary
        noPaddingBottom
        paddingBottom
        lightBg={lightBg}
        className="get-started"
      >
        <Container>
          <HeroRow imgStart>
            <HeroColumn vertical imgStart padded>
              <SectionHeading bold>{sectionHeading}</SectionHeading>
              <SectionSubHeading>{sectionSubHeading}</SectionSubHeading>
              <MobileRow>
                <MobileColumn vertical>
                  <img
                    src={GooglePlay}
                    width="100%"
                    height="47px"
                    alt="App on Googleplay"
                  />
                </MobileColumn>
                <MobileColumn vertical>
                  <img
                    src={AppStore}
                    width="100%"
                    height="47px"
                    alt="App on Appstore"
                  />
                </MobileColumn>
              </MobileRow>
            </HeroColumn>
            <HeroColumn imgStart>
              <ImgWrapper floating>
                <Img src={mobileAppImg} height="100%" alt="" />
              </ImgWrapper>
            </HeroColumn>
          </HeroRow>
        </Container>
      </StyledSection>
    </>
  );
};

export default MobileApp;
