import React, { useState, useEffect } from "react";
import Case from "./case";
import "../style/layout/_cases.scss";
import case04 from "../assets/case04.jpg";
import case02 from "../assets/case02.jpg";
import case03 from "../assets/case03.jpg";
import case01 from "../assets/case01.jpg";
import { ReactComponent as NavPrev } from "../assets/navigate_before.svg";
import { ReactComponent as NavNext } from "../assets/navigate_next.svg";

const Cases = (props) => {
  const [scroll, setScroll] = useState(0);

useEffect(()=>{
  window.addEventListener('scroll', handleScroll)
}, [])
// UNMOUNT?


  const handleScroll = (e) => {
    console.log(window.scrollY)
    setScroll(window.scrollY)
  };

  return (
    <section onScroll={handleScroll}
    onScroll={handleScroll}
    className="cases"
    // className={props.isMenuVisible === true ? "cases dropDown": "cases" }
    >
      <div className="cases__nav">
        <div
          onClick={() => {
            console.log("PREV");
            if (scroll != 0) {
              setScroll(scroll - 600);
            }
          }}
          className="cases__nav__prev cases__nav__hidden flex"
        >
          <NavPrev />
        </div>
        <div
          onClick={() => {
            console.log("NEXT");
            if (scroll < 33.33) {
              setScroll(scroll + 600);
            }
          }}
          className="cases__nav__next flex"
        >
          <NavNext />
        </div>
      </div>
      <div className="cases__slider">
        <div
          style={{ transform: `translate3d(-${scroll}px, 0px, 0px)` }}
          className="cases__scroll"
        >
          <Case img={case02} />
          <Case img={case04} />
          <Case img={case03} />
          <Case img={case01} />
          <Case img={case02} />
          <Case img={case04} />
        </div>
      </div>
    </section>
  );
};

export default Cases;
