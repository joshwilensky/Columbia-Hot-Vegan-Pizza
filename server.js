// DEPENDENCIES=================================================
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

// Starting Data========================
let reservations = [{
  id: 12345,
  name: Bella,
  email: "",
  phone: xxx - xxx - xxxx,
}];

let waitList = [{
  id: 12345,
  name: Bella,
  email: "",
  phone: xxx - xxx - xxxx,
}];

// Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// ROUTES=================================
app.use(apiroutes);
app.use(htmlroutes);
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "reserve.html"));
});

app.get("/waitlist", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "waitlist.html"));
});

// API ROUTES==============================================
app.get("/api/reservations", function (req, res) {
  res.json("this will display all the reservations.");

  app.get("/api/tables", function (req, res) {
    res.sendFile("this will display all the tables.");
    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }

    return res.json(false);
  });
  /// Create New Reservation - takes in JSON input
  app.post("/api/reservations", function (req, res) {
    var newReservation = req.body;
    console.log(newReservation);

    // Only make a reservation if there is an open table
    if (reservations.length < 5) {
      reservations.push(newReservation);

    } else {
      waitlist.push(newReservation);
      console.log(waitList);
      res.json("You've been added to the wait list")
    }
  });

  // Delete API==============================
  app.delete("/api/reservations", function (req, res) {
    reservations = [];
    waitList = [];
    res.status = [200].json("You've cleared all the reservations.")
  });
  // Starts the server to begin listening
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});