import React from "react";
import Button from '@material-ui/core/Button';
const axios = require("axios").default;


//  This function sets up an options object and then makes a client-side axios get request to
//  the DarkSky weather API.
const callDarkSkyApiSeattle = () => {
  console.log("Call DarkSky Button Clicked...");
  console.log("Sending get request to backend");
  console.log("Expecting backend to call DarkSky and return response object");
  axios
    .get("/api/callDarkSky")
    .then(response => {
      console.log("Response from server: ");
      console.log(response.data);
    })
    .catch(error => {
      console.log("There was an error: ");
      console.log(error);
    });
};

const DarkSkyButton = () => {
  return (
    <div>
      <Button
        id="darkSkyBtn"
        variant="contained" 
        color="primary"
        onClick={() => {
          callDarkSkyApiSeattle();
        }}
      >
        Call DarkSky (Check Console)
      </Button>
    </div>
  );
};

export default DarkSkyButton;
