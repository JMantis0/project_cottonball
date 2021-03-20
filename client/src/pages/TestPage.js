import React from "react";
import { useHistory } from "react-router-dom";
import DarkSkyButton from "../components/DarkSkyButton";
import TrailsButton from "../components/TrailsButton";
const TestPage = () => {
  const history = useHistory();
  return (
    <div>
      <h1>{"You've reached the Cottonball test page!"} </h1>
      <button
        id="returnBtn"
        onClick={() => {
          history.push("/");
        }}
      >
        Return home
      </button>
      <div>Re-using components</div>
      <DarkSkyButton />
      <TrailsButton />
    </div>
  );
};

export default TestPage;
