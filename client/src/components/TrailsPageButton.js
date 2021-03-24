import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const TrailsPageButton = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("Search Trails Page Button Clicked... heading to Search Trails page"); 
    history.push("/searchTrails");
  };
  return (
    <div>
      <Button
        id="searchTrailsPageBtn"
        variant="contained"
        color="primary"
        onClick={() => {
          handleClick();
        }}
      >
        Go to the Search Trails Page
      </Button>
    </div>
  );
};

export default TrailsPageButton;
