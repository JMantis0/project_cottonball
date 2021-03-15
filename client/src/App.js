import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DarkSkyButton from "./components/DarkSkyButton";
import TrailsButton from "./components/TrailsButton";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Project Cottonball</h2>
        <DarkSkyButton />
        <TrailsButton />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
