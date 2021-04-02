import React from "react";

import {
  Container,
  ContainerFluid,
  Img,
  SectionHeading,
  StyledSection,
} from "../../../GlobalStyles";
import {
  ImgWrapper,
  TextWrapper,
  InfoColumn,
  InfoRow,
  SubHeading,
  SubText,
  ContentWrapper,
} from "./InfoSection.elements";

import Img247 from "../../../img/247.svg";
import ImgSecurepayment from "../../../img/securepayment.svg";
import ImgPaylater from "../../../img/paylater.svg";
import ImgLoyalty from "../../../img/medal.svg";
import ImgUpdate from "../../../img/update.svg";

const InfoSection = ({
  lightBg,
  sectionHeading,
  img247Heading,
  img247Text,
  ImgSecurepaymentHeading,
  ImgSecurepaymentText,
  ImgPaylaterHeading,
  ImgPaylaterText,
  ImgLoyaltyHeading,
  ImgLoyaltyText,
  ImgUpdateHeading,
  ImgUpdateText,
}) => {
  return (
    <>
      <StyledSection viewPort mediumPaddingTop lightBg={lightBg}>
        <Container centered>
          <SectionHeading bold>{sectionHeading}</SectionHeading>
          <ContainerFluid marginTop>
            <InfoRow>
              <InfoColumn vertical>
                <ContentWrapper>
                  <ImgWrapper padded primary>
                    <Img src={Img247} alt="" />
                  </ImgWrapper>
                  <TextWrapper>
                    <SubHeading>{img247Heading}</SubHeading>
                    <SubText>{img247Text}</SubText>
                  </TextWrapper>
                </ContentWrapper>
              </InfoColumn>
              <InfoColumn vertical>
                <ContentWrapper>
                  <ImgWrapper padded primary>
                    <Img src={ImgSecurepayment} alt="" />
                  </ImgWrapper>
                  <TextWrapper>
                    <SubHeading>{ImgSecurepaymentHeading}</SubHeading>
                    <SubText>{ImgSecurepaymentText}</SubText>
                  </TextWrapper>
                </ContentWrapper>
              </InfoColumn>
              <InfoColumn vertical>
                <ContentWrapper>
                  <ImgWrapper padded primary>
                    <Img src={ImgPaylater} alt="" />
                  </ImgWrapper>
                  <TextWrapper>
                    <SubHeading>{ImgPaylaterHeading}</SubHeading>
                    <SubText>{ImgPaylaterText}</SubText>
                  </TextWrapper>
                </ContentWrapper>
              </InfoColumn>
            </InfoRow>
            <InfoRow>
              <InfoColumn vertical>
                <ContentWrapper>
                  <ImgWrapper padded primary>
                    <Img src={ImgUpdate} alt="" />
                  </ImgWrapper>
                  <TextWrapper>
                    <SubHeading>{ImgUpdateHeading}</SubHeading>
                    <SubText>{ImgUpdateText}</SubText>
                  </TextWrapper>
                </ContentWrapper>
              </InfoColumn>
              <InfoColumn vertical>
                <ContentWrapper>
                  <ImgWrapper padded primary>
                    <Img src={ImgLoyalty} alt="" />
                  </ImgWrapper>
                  <TextWrapper>
                    <SubHeading>{ImgLoyaltyHeading}</SubHeading>
                    <SubText>{ImgLoyaltyText}</SubText>
                  </TextWrapper>
                </ContentWrapper>
              </InfoColumn>
              <InfoColumn vertical>
                <ContentWrapper>
                  <TextWrapper>
                    <SubHeading></SubHeading>
                    <SubText></SubText>
                  </TextWrapper>
                </ContentWrapper>
              </InfoColumn>
            </InfoRow>
          </ContainerFluid>
        </Container>
      </StyledSection>
    </>
  );
};

export default InfoSection;
