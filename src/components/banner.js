import React, { useState } from "react";
import { ReactComponent as RightArrowBlack } from "../assets/arrow-right.svg";
import { ReactComponent as RightArrowWhite } from "../assets/arrow-right-white.svg";
import "../style/layout/_banner.scss";

const Banner = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="banner">
      <h2>
        <div className="line">
          <span>We craft your tomorow's bike,</span>
        </div>

        <div className="line">
          <span>driven by technology.</span>
        </div>
      </h2>
      <a
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="banner__more flex h-center"
        href="/"
      >
        More about us
        {isHover ? (
          <RightArrowWhite className="right_arrow" />
        ) : (
          <RightArrowBlack className="right_arrow" />
        )}
      </a>
    </div>
  );
};

export default Banner;
