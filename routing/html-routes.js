var path = require('path');

// module.exports = function (app) {
//     app.get("/tables", function (req, res) {
//         res.sendFile(path.join(__dirname, "public", "tables.html"));
//     });

//     app.get("/reserve", function (req, res) {
//         res.sendFile(path.join(__dirname, "public", "reserve.html"));
//     });

//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "public", "waitlist.html"));
//     });
// }

const router = require('express').Router();

router.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "tables.html"));
});

router.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "reserve.html"));
});

router.get("/resList", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "resList.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "waitlist.html"));
});

module.exports = router