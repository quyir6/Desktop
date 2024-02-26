import React from "react";
import MooreLogo from "../img/moorelbr-img.png";
import "../styles/NavBar.css";
import Search from "../img/search_FILL0_wght400_GRAD0_opsz24.svg";
import Expand from "../img/expand_more_FILL0_wght400_GRAD0_opsz24.svg";

const NavBar = () => {
  return (
    <header>
      <div className="redbar2" />
      <div className="header">
        <a href="https://www.moorelbr.com/">
          <img src={MooreLogo} alt="Moore Lumber Logo" className="Logo" />
        </a>
        <ul className="nav navparent">
          <img className="nav search" src={Search} alt="search" />
          <u1 className="nav">
            Departments <img src={Expand} />
          </u1>
          <u1 className="nav">
            Pros <img src={Expand} />
          </u1>
          <u1 className="nav">
            Store Services <img src={Expand} />
          </u1>
          <u1 className="nav">Shop Ace</u1>
          <u1 className="nav">
            About <img src={Expand} />
          </u1>
          <u1 className="nav">
            Locations <img src={Expand} />
          </u1>
        </ul>
      </div>
      <div className="redbar" />
      <div className="yellowbar" />
    </header>
  );
};

export default NavBar;
