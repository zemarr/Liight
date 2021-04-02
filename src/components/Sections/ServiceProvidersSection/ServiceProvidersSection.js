import React from "react";
import {
  Container,
  ContainerFluid,
  SectionHeading,
  StyledSection,
} from "../../../GlobalStyles";

import {
  ServiceRow,
  ServiceColumn,
  ImgWrapper,
  ServiceImg,
} from "./ServiceProvidersSection.elements";

import ie from "../../../img/ike.svg";
import etransact from "../../../img/Etranzact.svg";
import ekedc from "../../../img/ekedc.svg";
import interswitch from "../../../img/Interswitch.svg";

const ServiceProvidersSection = ({ lightBg }) => {
  return (
    <>
      <StyledSection mediumPaddingTop paddingBottom lightBg={lightBg}>
        <Container centered>
          <SectionHeading bold>SERVICE PROVIDERS</SectionHeading>
          <ContainerFluid marginTop>
            <ServiceRow>
              <ServiceColumn vertical>
                <ImgWrapper padded>
                  <ServiceImg src={ie} alt="" />
                </ImgWrapper>
              </ServiceColumn>
              <ServiceColumn vertical>
                <ImgWrapper padded>
                  <ServiceImg src={ekedc} alt="" />
                </ImgWrapper>
              </ServiceColumn>
              <ServiceColumn vertical>
                <ImgWrapper padded>
                  <ServiceImg src={etransact} alt="" />
                </ImgWrapper>
              </ServiceColumn>
              <ServiceColumn vertical>
                <ImgWrapper padded>
                  <ServiceImg src={interswitch} alt="" />
                </ImgWrapper>
              </ServiceColumn>
            </ServiceRow>
          </ContainerFluid>
        </Container>
      </StyledSection>
    </>
  );
};

export default ServiceProvidersSection;
