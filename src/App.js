import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Main from "./components/main";
import IntroAnimation from "./components/IntroAnimation";
import Subtitle from "./components/subtitle";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Trick to make viewport units works on mobile (thx css-tricks)
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  // On click, show menu and translate down Main
  const showMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    console.log(isMenuVisible);
  };

  return (
    <div>
      <IntroAnimation />
      <Nav isMenuVisible={isMenuVisible} />
      <Header isMenuVisible={isMenuVisible} showMenu={showMenu} />
      <Subtitle isMenuVisible={isMenuVisible}/>
      <Main isMenuVisible={isMenuVisible} />
    </div>
  );
}

export default App;
