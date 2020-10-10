import React from "react";
import "../style/base/_animations.scss";

const IntroAnimation = () => {
  return (
    <div
      // dynamicallyy display: none; At the end of animation
      className="intro"
    >
      <div className="intro__top">
        <div className="intro__shape">
          <div className="intro__mask"></div>
        </div>
        <div className="intro__shape">
          <div className="intro__mask"></div>
        </div>
        <div className="intro__shape">
          <div className="intro__mask"></div>
        </div>
      </div>
      <div className="intro__bottom">
        <div className="intro__shape">
          <div className="intro__mask"></div>
        </div>
        <div className="intro__shape">
          <div className="intro__mask"></div>
        </div>
        <div className="intro__shape">
          <div className="intro__mask"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
