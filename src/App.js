import React from "react";
import Header from "./components/header";
import Main from "./components/main";

function App() {
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
