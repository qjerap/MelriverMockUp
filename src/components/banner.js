import React, { useState } from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

import "../style/layout/_banner.scss";
import "../style/layout/_subtitle.scss";

const Banner = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div 
    className="container"
    // className={props.isMenuVisible === true ? "container dropDown": "container" }
    >
      <section className="main__banner-container flex h-center">
        <div 
        // className={props.isMenuVisible === true ? "banner dropDown": "banner" }
        className="banner"
        >
          <a className="banner__more flex h-center" href="/">
            More about us
            <RightArrow />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Banner;
