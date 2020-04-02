const express = require("express");
const router = express.Router();
// const db = require("../db");
// db.getCards()
// .then(id => console.log(id))

router.get("/", (req, res) => {
  res.render("index", { hi: "Hello World!" });
});

router.get("/player1", (req, res) => {
  res.render("player1");
});

router.get("/player2", (req, res) => {
  res.render("player2");
});

router.get('/deal/:id', (req, res) => {
  let id = req.params.id
  let player = 'Player' + id
  // db.dealCards()
  // .then(cards=> {

  // })
  let viewData = {
    player: player,
    nextPage: '/deal/2',
    card1: 12,
    card2: 3,
    card3: 5
  }
  viewData.total = viewData.card1 + viewData.card2 + viewData.card2
  // console.log(viewData.cards[0])
  res.render("deal", viewData)
})

router.get("/results", (req, res) => {
  let result = {
    winner: 'Player 1'
  }
  res.render("results", result);
});

module.exports = router;

