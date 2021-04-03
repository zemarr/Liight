import styled from "styled-components";

export const Chatbox = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-radius: 4px;
  position: fixed;
  width: 290px;
  height: 420px;
  margin: 0 15px;
  right: 0;
  bottom: 100px;
  transform: translateY(10px);
  transition: 0.4s ease-in-out;
  box-shadow: 9px 9px 19px -5px rgb(0 0 0 / 35%);
  -webkit-box-shadow: 9px 9px 19px -5px rgb(0 0 0 / 35%);
  -moz-box-shadow: 9px 9px 19px -5px rgba(0, 0, 0, 0.349);
  overflow: hidden;
  z-index: 900;
`;

export const ChatHeadSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row !important;
  align-items: center;
  margin: 0;
  padding: 20px;
  background-color: #FF9A16;
  color: #fff;
  border: none;
`;
export const ChatBodySection = styled.section`
  height: inherit;
  border: none;
  padding: 20px;
  font-size: 13px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.050980392156862744);
`;
export const ChatInputSection = styled.section`
  padding: 20px;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-end !important;
  border: none;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 820px) {
    /* flex-direction: column; */
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const FormInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid #a8a8a8;
  width: 80%;
  height: 43px;
  border: none;
  background-color: #f5f5f5;
  color: #000;
  font-size: 14px;
  box-shadow: 0 6px 11px -7px rgb(0 0 0 / 35%);
  -webkit-box-shadow: 0 6px 11px -7px rgb(0 0 0 / 35%);
  -moz-box-shadow: 0 6px 11px -7px rgba(0, 0, 0, 0.349);
  border-radius: 10px;

  &::placeholder {
    color: #a8a8a8;
  }
  &:focus {
    outline: none;
    background-color: #e7e7e7;
  }
`;

export const SendMessageButton = styled.button`
  background: ${({ primary }) => (primary ? "#FF9A16" : "transparent")};
  background: ${({ secondary }) => (secondary ? "#2784C6" : "")};
  background: ${({ disabled }) => (disabled ? "#d8c065" : "")};
  white-space: nowrap;
  margin-right: ${({ spaceMargin }) => (spaceMargin ? "17px" : "")};
  color: ${({ primary }) => (primary ? "#2f0743" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "18px" : "15px")};
  font-weight: 500;
  height: 43px;
  width: 43px;
  outline: none;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 inset;
  /* background-color: skyblue; */
  cursor: pointer;

  &:focus {
    outline: ${({ noOutline }) => (noOutline ? "none" : "none !important")};
    border: ${({ noOutline }) => (noOutline ? "none !important" : "")};
  }

  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

export const ChatBubble = styled.div`
  margin-bottom: 5px;
  border-bottom: solid 0.5px #80808024;
  padding: 6px 10px;
  box-shadow: 0 0px 5px -1px rgb(0 0 0 / 9%);
  border-radius: 5px;
  background: #efefef;
`;

export const UserAlias = styled.span`
  color: #FF9A16;
  font-weight: 500;
`;
export const UserMessage = styled.span`
  font-size: 14px;
  font-weight: 300;
`;
