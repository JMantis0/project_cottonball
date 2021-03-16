const router = require("express").Router();
const models = require("../models");

router.put("/testCreate", (req, res) => {
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

module.exports = router;
