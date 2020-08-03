var path = require('path');

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

router.post("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "waitlist.html"));
});

router.post("/resList", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "resList.html"));
});

router.post("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "reserve.html"));
});

router.post("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "tables.html"));
});

module.exports = router