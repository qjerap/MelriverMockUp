import React from "react";
import "../style/components/_case.scss";

const Case = (props) => {
  return (
    <div className="case__item">
      <img className="case__image" src={props.img} alt="" />
      <div className="case__content flex">
        <h3>Proudly Beautiful</h3>
        <h2>
          When hightTech <br />
          is Design
        </h2>
      </div>
    </div>
  );
};

export default Case;
