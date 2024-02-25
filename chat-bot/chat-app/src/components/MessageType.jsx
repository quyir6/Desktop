import React from "react";
import "./comp-styles/TextBox.css";

const MessageType = () => {
  return (
    <form className="send-message">
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="TextBox"
        placeholder="Type Here"
      />
      <button type="submit" className="Send">
        Send
      </button>
    </form>
  );
};

export default MessageType;
