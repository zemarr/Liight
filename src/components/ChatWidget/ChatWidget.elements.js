import styled from "styled-components";

export const ChatWidgetWrapper = styled.div`
  position: absolute;
  display: block;
  width: ${({ backDrop }) => (backDrop ? "100%" : "")};
  height: -webkit-fill-available;
  background-color: #00000045;
  transition: 0.8s ease-in-out;
`;

export const ChatButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#FF9A16" : "transparent")};
  background: ${({ secondary }) => (secondary ? "#2784C6" : "")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 64px" : "8px 17px")};
  padding: ${({ noPad }) => (noPad ? "0" : "")};
  margin-right: ${({ spaceMargin }) => (spaceMargin ? "17px" : "")};
  color: ${({ primary }) => (primary ? "#2f0743" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "18px" : "15px")};
  font-weight: 500;
  line-height: 16px;
  outline: none;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 1;
  z-index: 900;
  transition: 0.2s ease-in-out;

  &:focus {
    outline: ${({ noOutline }) => (noOutline ? "none" : "none !important")};
    border: ${({ noOutline }) => (noOutline ? "none !important" : "")};
  }

  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

export const Img = styled.img`
  background-color: ${({ background }) => (background ? "#FF9A16" : "")};
  border-radius: 50%;
  box-shadow: 0 5px 10px -7px rgb(0 0 0 / 34%);
  transition: 0.2s ease-in-out;
  padding: ${({ padded }) => (padded ? "10px" : "0")};
`;
