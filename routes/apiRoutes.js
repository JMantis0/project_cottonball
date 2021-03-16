const router = require("express").Router();

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
