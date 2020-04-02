const express = require("express");
const router = express.Router();
// const db = require("../db");
// db.getCards()
// .then(id => console.log(id))

router.get("/", (req, res) => {
  res.render("index", { hi: "Hello World!" });
});

// router.get("/player1", (req, res) => {
//   res.render("player1");
// });

// router.get("/player2", (req, res) => {
//   res.render("player2");
// });

router.get('/deal/:id', (req, res) => {
  let id = Number(req.params.id)
  let player = ''
  let dealId = 0
  let total = ''
  if (id < 3){
   player = 'Player ' + id
   dealId = id + 2
  } else if ( id === 3){
    player = 'Player 1'
    dealId = 3
  } else {
    player = 'Player 2'
    dealId = 4
  }
  let nextPage = ''
  if (id === 3) {
    nextPage = '/deal/' + (id - 1)
  } else {
    nextPage = '/results'
  }
  let card1 = '?'
  let card2 = '?'
  let card3 = '?'
console.log(id)
  if (id === 3 || id === 4) {
    card1 = 4
    card2 = 7
    card3 = 8
    total = card1 + card2 + card2
  }
    // db.dealCards()
    // .then(cards=> {

    // })
    let viewData = {
      player,
      nextPage,
      card1,
      card2,
      card3,
      dealId,
      total
    }
    res.render("deal", viewData)
})

router.get("/results", (req, res) => {
    let difference = 5
  let winner = 'Player 1'
  let result = {
    winner,
    difference
  }
  res.render("results", result);
});

module.exports = router;

