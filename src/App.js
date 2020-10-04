import React, { useEffect } from "react";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  // Trick to make viewport units works on mobile (thx css-tricks)
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <div>
      <div className="intro"></div>
      <Header />
      <nav className="nav"></nav>
      <Main />
    </div>
  );
}

export default App;
