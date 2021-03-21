const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 6000;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3000",
  clientID: "g9mGK4IY7u5PHu2VMO4oVqr2T1yNu4vS",
  issuerBaseURL: "https://jmantis-auth.us.auth0.com"
};

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(auth(config));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/api", apiRoutes);

// req.isAuthenticated is provided from the auth router
app.get("/auth", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
