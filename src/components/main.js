import React from "react";
import Banner from "./banner";
import Cases from "./cases";

import "../style/pages/_main.scss";

const Main = () => {
  return (
    <section className="main">
      <Banner />
      <Cases />
    </section>
  );
};

export default Main;
