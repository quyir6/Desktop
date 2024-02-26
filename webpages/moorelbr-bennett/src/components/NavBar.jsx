import React from "react";
import MooreLogo from "../img/moorelbr-img.png";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <div className="header">
        <a href="https://www.moorelbr.com/">
          <img src={MooreLogo} alt="Moore Lumber Logo" className="Logo" />
        </a>
        <ul className="nav">
          <u1 className="nav">Departments</u1>
          <u1 className="nav">Pros</u1>
          <u1 className="nav">Store Services</u1>
          <u1 className="nav">Shop Ace</u1>
          <u1 className="nav">About</u1>
          <u1 className="nav">Locations</u1>
        </ul>
      </div>
      <hr className="redbar" />
      <hr className="yellowbar" />
    </header>
  );
};

export default NavBar;
