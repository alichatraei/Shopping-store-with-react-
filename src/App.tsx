import React from "react";
import { HeaderLayout, FooterLayout } from "./Layout";
import { Home } from "./Views";
import "./App.css";
function App() {
  return (
    <div className="App">
      <HeaderLayout />
      <Home />
      <FooterLayout />
    </div>
  );
}

export default App;
