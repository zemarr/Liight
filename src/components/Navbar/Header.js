import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #24103a;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 300;
`;

const Header = ({ children }) => {
  return (
    <>
      <StyledHeader>{children}</StyledHeader>
    </>
  );
};

export default Header;
