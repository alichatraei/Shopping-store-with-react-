import React from "react";
import "./App.css";
import { HeaderLayout } from "./Layout";
import { Home } from "./Views";
function App() {
  return (
    <div className="App">
      <HeaderLayout />
      <Home />
    </div>
  );
}

export default App;
