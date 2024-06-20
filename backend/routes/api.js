const express = require("express");
const testApi = express.Router();

// Example route
testApi.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = testApi;
