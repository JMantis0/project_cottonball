import React from "react";
import env from "react-dotenv";
var axios = require("axios").default;

//  This function sets up an options object and then makes a client-side axios get request to
//  the DarkSky weather API.
const callDarkSkyApiSeattle = () => {
  const options = {
    method: "GET",
    // The longitude and latitude in the url path are for Seattle, Washington.
    url: "https://dark-sky.p.rapidapi.com/47.6062,-122.3321",
    params: { lang: "en", units: "auto" },
    headers: {
      "x-rapidapi-key": env.REACT_APP_API_KEY,
      "x-rapidapi-host": "dark-sky.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const DarkSkyButton = () => {
  return (
    <div>
      <button
        id="darkSkyBtn"
        onClick={() => {
          callDarkSkyApiSeattle();
        }}
      >
        Call DarkSky (Check Console)
      </button>
    </div>
  );
};

export default DarkSkyButton;
