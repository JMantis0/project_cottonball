import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DarkSkyButton from "./components/DarkSkyButton";
import TrailsButton from "./components/TrailsButton";
import TestPageButton from "./components/TestPageButton";
import TestApiRouteButton from "./components/TestApiRouteButton";
import TestDataBaseButton from "./components/TestDataBaseButton";
import AuthLoginButton from "./components/AuthLoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";
import TestPage from "./pages/TestPage";
import SearchTrails from "./pages/SearchTrails";
import TrailsPageButton from "./components/TrailsPageButton";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [TDState, setTDState] = useState([]); // Trail Data
  const [WDState, setWDState] = useState([]); // Weather Data

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Project Cottonball</h2>
            <UserProfile />
            <AuthLoginButton />
            <DarkSkyButton />
            <TrailsButton />
            <TestPageButton />
            <TrailsPageButton />
            <TestApiRouteButton />
            <TestDataBaseButton />
            <LogoutButton />
            <button>Search Trails page</button>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </Route>
      <Route exact path="/test">
        <TestPage />
      </Route>
      <Route exact path="/searchTrails">
        <SearchTrails
          setWDState={setWDState}
          setTDState={setTDState}
          WDState={WDState}
          TDState={TDState}
        />
      </Route>
    </Router>
  );
}

export default App;
