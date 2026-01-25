const express = require("express");
const app = express();

// import the routes here as such
const userPref = require("./routes/userPreference.route");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    ServerRunning: true,
  });
});

app.use("/api/v1/", userPref);

module.exports = app;
