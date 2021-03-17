import React from "react";
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
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Test the apiRoute
      </button>
    </div>
  );
};

export default TestApiRouteButton;
