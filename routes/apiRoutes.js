const router = require("express").Router();
const models = require("../models");
const axios = require("axios").default;
require("dotenv").config();

router.get("/callDarkSky", (req, res) => {
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log("GET request from client: /api/callDarkSky");
  const options = {
    method: "GET",
    // The longitude and latitude in the url path are for Seattle, Washington.
    url: "https://dark-sky.p.rapidapi.com/47.6062,-122.3321",
    params: { lang: "en", units: "auto" },
    headers: {
      "x-rapidapi-key": process.env.DARKSKY_API_KEY,
      "x-rapidapi-host": "dark-sky.p.rapidapi.com"
    }
  };
  axios
    .request(options)
    .then(response => {
      console.log("Response from DarkSky: ");
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(error => {
      console.log("There was an error: ");
      console.error(error);
      res.status(500).send(error);
    });
});

router.get("/callTrailsAPI", (req, res) => {
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log("GET request from client: /api/callTrailsAPI");
  const trailOptions = {
    method: "GET",
    url: "https://trailapi-trailapi.p.rapidapi.com/",
    params: {
      "q-activities_activity_type_name_eq": "hiking",
      "q-city_cont": "Seattle",
      "q-state_cont": "Washington",
      // The longitude and latitude in the url path are for Seattle, Washington.
      lat: "47.6062",
      lon: "-122.3321",
      radius: "25",
      //   'q-country_cont': 'United States',
      limit: "25"
    },
    headers: {
      "x-rapidapi-key": process.env.TRAILS_API_KEY,
      "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
    }
  };
  axios
    .request(trailOptions)
    .then(response => {
      console.log("Response from Trails API: ");
      const editedData = response.data["places"];
      console.log(editedData);
      res.status(200).send(editedData);
    })
    .catch(error => {
      console.log("There was an error: ");
      console.error(error);
      res.status(500).send(error);
    });
});
router.put("/testCreate", (req, res) => {
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log("PUT request from client: /api/testCreate");
  const newTestData = models.TestData.build({ text: "TEST DATA" });
  newTestData
    .save()
    .then(response => {
      console.log("Saved a new entry to database");
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(
        "There was an error attempting to create a test DB entry: ",
        error
      );
      res.status(400).send(error);
    });
});

router.get("/test", (req, res) => {
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log("GET request from client: /api/test");
  console.log("Sending OK status to client.");
  res.send(200);
});

router.get("/searchTrails", (req, res) => {
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log(
    "███████████████████████████████████████████████████████████████████"
  );
  console.log("GET request from client: /api/searchTrails");
  console.log("Sending OK status to client.");
  res.send(200);
});

module.exports = router;
