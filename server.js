// DEPENDENCIES=================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Starting Data========================

// Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static('public'))

// ROUTES=================================
// app.use(apiroutes);
// Basic route that sends the user first to the AJAX Page
require('./routing/api-routes')(app);
// require('./app/routing/html-routes')(app);

app.use(require('./routing/html-routes'));
// API ROUTES==============================================
// app.get("/api/reservations", function (req, res) {
//   res.json("this will display all the reservations.");

//   app.get("/api/tables", function (req, res) {
//     res.sendFile("this will display all the tables.");
//     console.log(chosen);

//     for (var i = 0; i < tables.length; i++) {
//       if (chosen === tables[i].routeName) {
//         return res.json(tables[i]);
//       }
//     }

//     return res.json(false);
//   });
//   /// Create New Reservation - takes in JSON input
//   app.post("/api/reservations", function (req, res) {
//     var newReservation = req.body;
//     console.log(newReservation);

//     // Only make a reservation if there is an open table
//     if (reservations.length < 5) {
//       reservations.push(newReservation);

//     } else {
//       waitlist.push(newReservation);
//       console.log(waitList);
//       res.json("You've been added to the wait list")
//     }
//   });

//   // Delete API==============================
//   app.delete("/api/reservations", function (req, res) {
//     reservations = [];
//     waitList = [];
//     res.status = [200].json("You've cleared all the reservations.")
//   });
//   // Starts the server to begin listening
// });
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});