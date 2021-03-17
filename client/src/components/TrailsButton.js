import React from "react";
const axios = require("axios").default;

//  This function sets up an options object and then makes a client-side axios get request to
//  the Trails API.
const callTrailApiSeattle = () => {
  console.log("Call Trails API Button Clicked...");
  console.log("Sending get request to backend");
  console.log("Expecting backend to call Trails API and return response object");
  axios
    .get("/api/callTrailsAPI")
    .then(response => {
      console.log("Response from server: ");
      console.log(response.data);
    })
    .catch(error => {
      console.log("There was an error: ");
      console.log(error);
    });
};

const TrailsButton = () => {
  return (
    <div>
      <button
        id="trailsBtn"
        onClick={() => {
          callTrailApiSeattle();
        }}
      >
        Call Trails API (Check Console)
      </button>
    </div>
  );
};

export default TrailsButton;
