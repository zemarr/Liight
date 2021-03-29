import React, { useState } from "react";
import customercare from "../../../img/customercare.svg";
import send from "../../../img/send.svg";
import {
  Chatbox,
  ChatHeadSection,
  ChatBodySection,
  ChatInputSection,
  Form,
  FormInput,
  SendMessageButton,
  ChatBubble,
  UserAlias,
  UserMessage,
} from "./ChatBox.elements";

const dummyData = [
  {
    name: "Admin",
    message: "Got any issues? We are here to help.",
    id: 101,
  },
];
export const ChatBox = () => {
  // const [name, setName] = useState("");
  // const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");

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
    // e.target.value = !e.target.value;
    console.log("Submitted", message);
  };

  return (
    <>
      <Chatbox className="chatbox">
        <ChatHeadSection>
          <img src={customercare} height="60px" alt="" />
          <h6>Chat with Customer Care</h6>
        </ChatHeadSection>
        <ChatBodySection>
          <span className="current-date"></span>
          {/* Chat bubble item */}
          {dummyData.map((data, id) => {
            // console.log(data.id);
            return (
              <>
                <ChatBubble
                  key={id}
                  className="chat-bubble animate__animated animate__jackInTheBox animate__faster animate__delay-1s"
                >
                  <UserAlias className="alias">{data.name}</UserAlias>
                  <br />
                  <UserMessage className="message">{data.message}</UserMessage>
                  <span className="current-time"></span>
                </ChatBubble>
              </>
            );
          })}
          {/* Chat bubble item */}{" "}
        </ChatBodySection>
        <ChatInputSection>
          <Form onSubmit={submitHandler}>
            <FormInput
              type="text"
              placeholder="Send a Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <SendMessageButton type="submit" primary onClick={submitHandler}>
              <img
                src={send}
                height="25px"
                style={{ margin: "0 auto" }}
                alt=""
              />
            </SendMessageButton>
          </Form>
        </ChatInputSection>
      </Chatbox>
    </>
  );
};
