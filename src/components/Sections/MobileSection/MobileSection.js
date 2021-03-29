import React from "react";
import {
  Container,
  SectionHeading,
  StyledSection,
} from "../../../GlobalStyles";
import {
  MobileColumn,
  MobileRow,
  SectionSubHeading,
} from "./MobileSection.elements";
import GooglePlay from "../../../img/googleplay.svg";
import AppStore from "../../../img/appstore.svg";

const MobileApp = ({ sectionHeading, sectionSubHeading }) => {
  return (
    <>
      <StyledSection paddingBottom className="get-started">
        <Container>
          <SectionHeading>{sectionHeading}</SectionHeading>
          <SectionSubHeading>{sectionSubHeading}</SectionSubHeading>
          <MobileRow>
            <MobileColumn vertical>
              <img src={GooglePlay} width="100%" height='67px' alt="App on Googleplay" />
            </MobileColumn>
            <MobileColumn vertical>
              <img src={AppStore} width="100%" height='67px' alt="App on Appstore" />
            </MobileColumn>
          </MobileRow>
        </Container>
      </StyledSection>
    </>
  );
};

export default MobileApp;
