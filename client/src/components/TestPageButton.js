import React from "react";
import { useHistory } from "react-router-dom";

const TestPageButton = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("Test Button Clicked... heading to test page");
    history.push("/test");
  };
  return (
    <div>
      <button
        id="testPageBtn"
        onClick={() => {
          handleClick();
        }}
      >
        Go to the Test Page
      </button>
    </div>
  );
};

export default TestPageButton;
