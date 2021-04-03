import React, { useState } from "react"; // import useContext

import chatIcon from "../../img/support-alt.svg";
import closeChat from "../../img/closeChat.svg";
import { ChatBox } from "./ChatBox/ChatBox";
import { ChatButton, ChatWidgetWrapper, Img } from "./ChatWidget.elements";

const ChatWidget = () => {
  const [showWidget, setShowWidget] = useState(false);
  // I created a variable called `data` for readability.
  // what we did here was that we called the useContextApi and gave it a parameter of WidgetContext
  // [which is actually the Provider context we wish to subscribe to]

  // object destructuring for data we wish to subscribe to from the provider Context

  //   Pay attention...
  // we created a helper function which will help us instantiate the state objects we destructured from the Context Provider
  // Notice how it is the same way we would use state ie 'const [state, setState] = useState()'
  // You must not mutate state directly!! Call "setState" if you want to update the state value.
  const toggleShowWidget = () => {
    setShowWidget(!showWidget);
  };

  return (
    <>
      <ChatWidgetWrapper backDrop={showWidget}>
        <ChatButton primary onClick={toggleShowWidget}>
          {showWidget ? (
            <Img
              padded
              src={closeChat}
              alt=""
              background
              height="50px"
              className="exitChat"
            />
          ) : (
            <Img
              src={chatIcon}
              alt=""
              height="50px"
              background
              className="chat"
            />
          )}
        </ChatButton>
        {showWidget ? <ChatBox /> : null}
      </ChatWidgetWrapper>
    </>
  );
};

export default ChatWidget;
