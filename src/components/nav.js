import React from "react";
import "../style/layout/_nav.scss";

const Nav = (props) => {
  return (
    <nav className={props.isMenuVisible === true ? "nav isVisible" : "nav"}>
      <div className="nav__container">
        <div className="nav__content container">
          <div className="nav__content__column">
            <div className="nav__title">Menu</div>
            <ul className="nav__links">
              <li className="nav__link">
                <a href="/" className="link">
                  Case Studies
                </a>
              </li>
              <li className="nav__link">
                <a href="/" className="link">
                  Approach
                </a>
              </li>
              <li className="nav__link">
                <a href="/" className="link">
                  Services
                </a>
              </li>
              <li className="nav__link">
                <a href="/" className="link">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__content__column">
            <div className="nav__title">Contact</div>
            <div className="nav__infos">
              <ul className="nav__info">
                <li>
                  <strong>Email</strong>
                </li>
                <li>Get in touch with us</li>
                <li>Get a free audit</li>
              </ul>
              <ul className="nav__info">
                <li>
                  <strong>Headquarter</strong>
                </li>
                <li>Boulevard Papineau 2213</li>
                <li>H2J 1LX Montreal</li>
                <li>Canada</li>
              </ul>
              <ul className="nav__info">
                <li>
                  <strong>Phone</strong>
                </li>
                <li>+01 (514) 123 4567</li>
              </ul>
              <ul className="nav__info">
                <li>
                  <strong>Legal</strong>
                </li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
