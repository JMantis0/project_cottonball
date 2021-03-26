import React from "react";
import { Button } from "@material-ui/core";
import { func } from "prop-types";
const axios = require("axios").default;

const DarkSkyButton = ({ setWDState }) => {
  //  This function sets up an options object and then makes a client-side axios get request to
  //  the DarkSky weather API.
  const callDarkSkyApiSeattle = () => {
    console.log("Request GET /api/callDarkSky");
    axios
      .get("/api/callDarkSky")
      .then(weatherData => {
        console.log(
          "Response from request GET /api/callDarkSky",
          weatherData.data
        );
        setWDState(weatherData.data);
      })
      .catch(error => {
        console.log("Error on GET /api/callDarkSky", error);
      });
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        id="darkSkyBtn"
        onClick={() => {
          callDarkSkyApiSeattle();
        }}
      >
        Call DarkSky (Check Console)
      </Button>
    </div>
  );
};

DarkSkyButton.propTypes = {
  setWDState: func
};
export default DarkSkyButton;
