import React from "react";
import { Button } from '@material-ui/core';
import axios from "axios";

const TestApiRouteButton = () => {
  const handleClick = () => {
    console.log("Calling the test api-route.  Check your backend console.");
    axios
      .get("/api/test")
      .then(response => {
        console.log("Response from server: ", response);
      })
      .catch(error => {
        console.log("There was an error in the test route: ", error);
      });
  };
  return (
    <div>
      <Button
        variant="contained" 
        color="secondary"
        onClick={() => {
          handleClick();
        }}
      >
        Test the apiRoute
      </Button>
    </div>
  );
};

export default TestApiRouteButton;
