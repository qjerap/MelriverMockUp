import React, { useState } from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

import "../style/layout/_banner.scss";

const Banner = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="container">
      <section className="main__banner-container flex h-center">
        <div className="banner">
          <h2>
            <div className="line">
              <span>We craft your tomorow's bike,</span>
            </div>

            <div className="line">
              <span>driven by technology.</span>
            </div>
          </h2>
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
