import React from "react";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const TestPageButton = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("Test Button Clicked... heading to test page");
    history.push("/test");
  };
  return (
    <div>
      <Button
        id="testPageBtn"
        variant="contained" 
        color="primary"
        onClick={() => {
          handleClick();
        }}
      >
        Go to the Test Page
      </Button>
    </div>
  );
};

export default TestPageButton;
