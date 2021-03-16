import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DarkSkyButton from "./components/DarkSkyButton";
import TrailsButton from "./components/TrailsButton";
import TestPageButton from "./components/TestPageButton";
import TestApiRouteButton from "./components/TestApiRouteButton";
import TestPage from "./pages/TestPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Project Cottonball</h2>
            <DarkSkyButton />
            <TrailsButton />
            <TestPageButton />
            <TestApiRouteButton />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </Route>
      <Route exact path="/test">
        <TestPage />
      </Route>
    </Router>
  );
}

export default App;
