import React from "react";
import "../style/layout/_header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="flex space-between h-center">
          <a className="logo" href="/">
            bike
            <br />
            <span>tomorow</span>
          </a>
          <div className="menu">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
