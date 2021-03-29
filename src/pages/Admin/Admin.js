import React from "react";
import InfoSection from "../../components/Sections/InfoSection/InfoSection";

import Carousel from "../../components/Carousel/Carousel";
import { FooterObj, InfoSectionObj, MobileSectionObj } from "./Data";
import ServiceProvidersSection from "../../components/Sections/ServiceProvidersSection/ServiceProvidersSection";
import Footer from "../../components/Sections/Footer/Footer";
import ChatWidget from "../../components/ChatWidget/ChatWidget";

import MobileSection from "../../components/Sections/MobileSection/MobileSection";

import ScrollToTop from "../../components/ScrollToTop";
import styled from "styled-components";
import StyledHeader from "../../components/Navbar/Navbar";

const AdminWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Admin = () => {
  return (
    <>
      <AdminWrapper className="Home-Main">
        <StyledHeader />
        <Carousel />
        <InfoSection {...InfoSectionObj} />
        <ServiceProvidersSection />
        <MobileSection {...MobileSectionObj}></MobileSection>
        <Footer {...FooterObj} />
        <ScrollToTop />
        <ChatWidget />
      </AdminWrapper>
    </>
  );
};

export default Admin;
