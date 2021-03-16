import axios from "axios";
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
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Test DataBase
      </button>
    </div>
  );
};

export default TestDataBaseButton;
