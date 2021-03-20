import axios from "axios";
import { Button } from '@material-ui/core';
import React from "react";

const TestDataBaseButton = () => {
  const handleClick = () => {
    console.log(
      "Attempting to create a test entry in the DB.  Making PUT request... "
    );
    axios
      .put("/api/testCreate", { data: "sample" })
      .then(response => {
        console.log("Response from server: ", response);
      })
      .catch(error => {
        console.log(
          "There was an error attempting to test the database: ",
          error
        );
      });
  };

  return (
    <div>
      <Button
        variant="contained" 
        color="primary"
        onClick={() => {
          handleClick();
        }}
      >
        Test DataBase
      </Button>
    </div>
  );
};

export default TestDataBaseButton;
