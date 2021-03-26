import React from "react";
import { Button } from "@material-ui/core";
import { func } from "prop-types";
const axios = require("axios").default;

const TrailsButton = ({ setTDState }) => {
  //  This function sets up an options object and then makes a client-side axios get request to
  //  the Trails API.
  const callTrailApiSeattle = () => {
    console.log("Request GET /api/callTrailsAPI");
    axios
      .get("/api/callTrailsAPI")
      .then(trailData => {
        console.log(
          "Response from request GET /api/callTrailsAPI",
          trailData.data
        );
        setTDState(trailData.data);
      })
      .catch(error => {
        console.log("Error on GET /api/callTrailsAPI", error);
      });
  };
  return (
    <div>
      <Button
        id="trailsBtn"
        variant="contained"
        color="primary"
        onClick={() => {
          callTrailApiSeattle();
        }}
      >
        Get Trails for Seattle
      </Button>
    </div>
  );
};
TrailsButton.propTypes = {
  setTDState: func
};
export default TrailsButton;
