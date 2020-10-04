import React from "react";
import Case from "./case";
import "../style/layout/_cases.scss";
import case04 from "../assets/case04.jpg";
import case02 from "../assets/case02.jpg";
import case03 from "../assets/case03.jpg";
import { ReactComponent as NavPrev } from "../assets/navigate_before.svg";
import { ReactComponent as NavNext } from "../assets/navigate_next.svg";

const Cases = () => {
  return (
    <section className="cases">
      <div className="cases__nav">
        <div className="cases__nav__prev cases__nav__hidden flex">
          <NavPrev />
        </div>
        <div className="cases__nav__next flex">
          <NavNext />
        </div>
      </div>
      <div className="cases__slider">
        <div className="cases__scroll">
          <Case img={case02} />
          <Case img={case04} />
          <Case img={case03} />
        </div>
      </div>
    </section>
  );
};

export default Cases;
