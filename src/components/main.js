import React from "react";
import Banner from "./banner";
import Cases from "./cases";

import "../style/pages/_main.scss";

const Main = (props) => {
  return (
    <section 
    
    className="main"
    className={props.isMenuVisible === true ? "main dropDown": "main" }
    >
      <Banner isMenuVisible={props.isMenuVisible} />
      <Cases isMenuVisible={props.isMenuVisible} />
    </section>
  );
};

export default Main;
