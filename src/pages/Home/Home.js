import React, { useEffect, useState } from "react";
import InfoSection from "../../components/Sections/InfoSection/InfoSection";

import {
  FooterObj,
  HeroObj,
  InfoSectionObj,
  MobileSectionObj,
  NavbarObj,
  ServiceProvidersObj,
} from "./Data";
import { Hr } from "../../GlobalStyles";
import ServiceProvidersSection from "../../components/Sections/ServiceProvidersSection/ServiceProvidersSection";
import Footer from "../../components/Sections/Footer/Footer";
import ChatWidget from "../../components/ChatWidget/ChatWidget";

import MobileSection from "../../components/Sections/MobileSection/MobileSection";

import ScrollToTop from "../../components/ScrollToTop";
import styled from "styled-components";
import Hero from "../../components/Sections/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  min-height: ${({ show }) => (show ? "50px" : "0px")};
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.4px;
  width: 100%;
  background: #b10000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;

  p {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }

  @media screen and (max-width: 425px) {
    height: 60px;
    font-size: 11px;
  }
`;

const Home = () => {
  const [visible, setVisible] = useState(false);
  // const [showBanner, setShowBanner] = useState(false);

  // toggle when the banner appears and disappears

  //  Toggle when the page is scrolled a particular distance
  const toggleVisibility = () => {
    window.pageYOffset > 900 ? setVisible(true) : setVisible(false);
  };

  // useEffect to make changes to components on state change
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, [visible]);

  return (
    <>
      <HomeWrapper className="Home-Main">
        <Header show>
          <p>Our commitment remains with you during the COVID-19 Pandemic</p>
        </Header>
        <Navbar {...NavbarObj} />
        <Hero {...HeroObj} />
        <InfoSection {...InfoSectionObj} />
        <Hr halfWidth></Hr>
        <ServiceProvidersSection {...ServiceProvidersObj} />
        <MobileSection {...MobileSectionObj}></MobileSection>
        <Hr></Hr>
        <Footer {...FooterObj} />
        {visible ? <ScrollToTop /> : null}
        <ChatWidget />
      </HomeWrapper>
    </>
  );
};

export default Home;
