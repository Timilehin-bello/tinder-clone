import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://media.wnyc.org/i/800/0/l/85/1/rsz_photo_credit_cass_bird.jpg",
      message: "Hey ",
    },
    {
      name: "Ellen",
      image:
        "https://media.wnyc.org/i/800/0/l/85/1/rsz_photo_credit_cass_bird.jpg",
      message: "Whats up guys",
    },
    {
      message: "Whats up guys",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ASHLEY GRAM ON 28/09/2020
      </p>

      {messages.map(({ name, image, message }) =>
        name ? (
          <div className="chatScreen__message">
            <Avatar className="chatScreen__image" alt={name} src={image} />
            <p className="chatScreen__text">{message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a Message"
        />
        <button className="chatScreen__inputButton" onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
