import React, { useContext } from "react"; // import useContext

import chatIcon from "../support.svg";
import closeChat from "../closeChat.svg";
import customercare from "../customercare.svg";
import send from "../send.svg";
import { WidgetContext } from "../context/WidgetContext"; // import WidgetContext. We will be using this soon

const ChatWidget = () => {
  const data = useContext(WidgetContext); // I created a variable called `data` for readability.
  // what we did here was that we called the useContextApi and gave it a parameter of WidgetContext
  // [which is actually the Provider context we wish to subscribe to]

  const { showWidget, setShowWidget } = data; // object destructuring for data we wish to subscribe to from the provider Context

  //   Pay attention...
  // we created a helper function which will help us instantiate the state objects we destructured from the Context Provider
  // Notice how it is the same way we would use state ie {const [state, setState] = useState()}
  // You must not mutate state directly!! Call "setState" then you cant set a new value.
  const toggleShowWidget = () => {
    setShowWidget(!showWidget);
  };

  return (
    <>
      <button onClick={toggleShowWidget} className="chat-button">
        {showWidget ? (
          <img src={closeChat} alt="exit" height="60px" className="exitChat" />
        ) : (
          <img src={chatIcon} alt="exit" height="60px" />
        )}
      </button>
      {showWidget ? <ChatBox /> : null}
    </>
  );
};

export const ChatBox = () => {
  const dummyData = [
    {
      name: "user007",
      message: "Got any issues? we are here to help.",
    },
  ];

  // let date = new Date();

  // let getDay = date.getDate();
  // let getMonth = date.getMonth();
  // let getYear = date.getFullYear();
  // let getMinutes = date.getMinutes();
  // let getHours = date.getHours();
  // console.log("Full date:", getDay, getMonth, getYear);
  // console.log("Full time:", getHours, getMinutes);

  //   const [message, setMessage] = useState();

  //   const textInputHandler = (e) => {
  //     setMessage({
  //       message: e.target.value,
  //     });
  //     console.log(message)
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.value = !e.target.value;
    console.log("Submitted");
  };

  // const handleKeyPress = (e) => {
  //   e.preventDefault();
  //   if (e.key === "Enter") {
  //     submitHandler();
  //   }
  // };

  return (
    <>
      <ul className="chatbox list-group">
        <li className="head list-group-item">
          <img src={customercare} height="70px" alt="" />
          <h6>Chat with Customer Care</h6>
        </li>
        <li className="body list-group-item">
          <span className="current-date"></span>
          <ul>
            {/* Chat bubble item */}
            {dummyData.map((data, i) => {
              console.log(data);
              return (
                <li key={i}>
                  <div className="chat-bubble">
                    <span>{data.name}</span>
                    <br />
                    <span>{data.message}</span>
                  </div>

                  <span className="current-time"></span>
                </li>
              );
            })}
            {/* Chat bubble item */}
          </ul>
        </li>
        <li className="textbox list-group-item">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Send a Message"
              //   onKeyPress={handleKeyPress}
              //   onChange={textInputHandler}
            />
            <button>
              <img src={send} height="25px" alt="" onClick={submitHandler} />
            </button>
          </form>
        </li>
      </ul>
    </>
  );
};

export default ChatWidget;
