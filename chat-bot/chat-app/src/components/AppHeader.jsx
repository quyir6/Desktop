import React from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import "./comp-styles/AppHeader.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import IconButton from "@mui/material/IconButton";

const AppHeader = () => {
  return (
    <>
      <header className="AppHeader">
        <IconButton>
          <ChatOutlinedIcon className="ChatBubble" />
        </IconButton>
        <h1>Messages</h1>
        <AccountCircleOutlinedIcon className="AccountIcon" />
      </header>
    </>
  );
};

export default AppHeader;
