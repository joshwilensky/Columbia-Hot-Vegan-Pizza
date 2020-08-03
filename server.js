// DEPENDENCIES=========================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE===========================
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static('public'))

// ROUTES===============================
require('./routing/api-routes')(app);
app.use(require('./routing/html-routes'));

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});