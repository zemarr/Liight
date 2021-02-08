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
      {showWidget ? (
        <ChatBox className="animate__animated animate__slideInUp animate__faster" />
      ) : null}
    </>
  );
};

export const ChatBox = (props) => {
  const dummyData = [
    {
      name: "Admin",
      message: "Got any issues? We are here to help.",
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

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.value = !e.target.value;
    console.log("Submitted");
  };

  return (
    <>
      <div className={`chatbox list-group ${props.className}`}>
        <div className="head list-group-item">
          <img src={customercare} height="60px" alt="" />
          <h6>Chat with Customer Care</h6>
        </div>
        <div className="body list-group-item">
          <span className="current-date"></span>
          <div>
            {/* Chat bubble item */}
            {dummyData.map((data, i) => {
              // console.log(data);
              return (
                <div key={i}>
                  <div className="chat-bubble animate__animated animate__jackInTheBox animate__faster animate__delay-1s">
                    <span className="alias">{data.name}</span>
                    <br />
                    <span className="message">{data.message}</span>
                  </div>

                  <span className="current-time"></span>
                </div>
              );
            })}
            {/* Chat bubble item */}
          </div>
        </div>
        <div className="textbox list-group-item">
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
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
