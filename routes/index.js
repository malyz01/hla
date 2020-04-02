const express = require("express");
const router = express.Router();
const db = require("../db");
db.getCards()
.then(id => console.log(id))

router.get("/", (req, res) => {
  res.render("index", { hi: "Hello World!" });
});

router.get("/player1", (req, res) => {
  res.render("player1");
});

router.get("/player2", (req, res) => {
  res.render("player2");
});

router.get("/results", (req, res) => {
  res.render("results");
});

module.exports = router;

