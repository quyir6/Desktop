import React from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import "./comp-styles/AppHeader.css";
import IconButton from "@mui/material/IconButton";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const AppHeader = () => {
  const [user] = useAuthState(getAuth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(getAuth, provider);
  };
  const signOut = () => {
    getAuth.signOut();
  };

  return (
    <>
      <header className="AppHeader">
        <IconButton className="ChatBubbleParent">
          <ChatOutlinedIcon className="ChatBubble" />
        </IconButton>
        {user ? (
          <button onClick={signOut} className="sign-out" type="button">
            Sign Out
          </button>
        ) : (
          <button className="sign-in">
            <img
              onClick={googleSignIn}
              src={GoogleSignin}
              alt="sign in with google"
              type="button"
            />
          </button>
        )}
        <h1>Messages</h1>
      </header>
    </>
  );
};

export default AppHeader;
