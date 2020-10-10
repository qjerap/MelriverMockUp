import React from "react";
import "../style/layout/_banner.scss";
import "../style/layout/_subtitle.scss";


const Subtitle = (props) => {
  return (
    <div 
    className={props.isMenuVisible === true ? "container subtitle dropDown": "container subtitle" }
    >
        <div className="banner">
          <h2>
            <div className="line">
              <span>We craft your tomorow's bike,</span>
            </div>
            <br/>

            <div className="line">
              <span>driven by technology.</span>
            </div>
          </h2>
        </div>
    </div>
  );
};

export default Subtitle;
