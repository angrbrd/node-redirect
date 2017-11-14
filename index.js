// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 8080;

// Routes
// ===========================================================
app.get("/home", function(req, res) {
  console.log("___ENTER /home___");

  res.send("Welcome home!");
});

app.get("/redirect", function(req, res) {
  console.log("___ENTER /redirect___");

  res.send("Redirect page...redirecting...");
});

app.get("/destination", function(req, res) {
  console.log("___ENTER /destination___");

  res.send("Destination page.");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
