import React from "react";
import Banner from "./banner";

import "../style/pages/_main.scss";

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main__banner-container flex h-center">
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default Main;
