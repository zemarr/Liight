import { Container, StyledSection } from "../../../GlobalStyles";
import {
  CallForHelp,
  CallToAction,
  HeroButton,
  HeroButtonWrapper,
  HeroColumn,
  HeroRow,
  IntroText,
  LoanText,
  TopUpText,
} from "./Hero.elements";

import Carousel from "../../Carousel/Carousel";
import { Link } from "react-router-dom";

const Hero = ({ lightBg }) => {
  return (
    <>
      <StyledSection noPadding ViewPort lightBg={lightBg}>
        <Container>
          <HeroRow>
            <HeroColumn imgStart>
              <CallToAction lightBg={lightBg} className="callToAction">
                <IntroText>What would you like to do?</IntroText>
                <h1>
                  Energy <TopUpText>Top-up</TopUpText>
                  <br />
                  Request a <LoanText>Loan</LoanText>
                </h1>
                {/* <h1></h1> */}
                <HeroButtonWrapper>
                  <Link to="topup">
                    <HeroButton primary spaceMargin fullWidth>
                      Top-up Now
                    </HeroButton>
                  </Link>
                  <Link to="loan">
                    <HeroButton spaceMargin fullWidth>
                      Energy Loan
                    </HeroButton>
                  </Link>
                </HeroButtonWrapper>
                <CallForHelp>
                  For help! Call{" "}
                  <a href="tel: +23408066434176">0806 643 4176</a>
                </CallForHelp>
              </CallToAction>
            </HeroColumn>
            <HeroColumn imgStart>
              <Carousel />
            </HeroColumn>
          </HeroRow>
        </Container>
      </StyledSection>
    </>
  );
};

export default Hero;
