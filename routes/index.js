const express = require("express");
const router = express.Router()
const db = require("../db");
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

router.post("/deal/:id", (req, res) => {
  const id = req.params.id;
  db.getRandomNumbers()
    .then(numbers => {
      return Promise.all(
        numbers.map(num => {
          return db.updatePicked(num);
        })
      ).then(() => numbers);
    })
    .then(numbers => db.updatePlayer(id, numbers))
    .then(() => res.redirect(`/deal/${id}`));
});

router.get("/deal/:id", (req, res) => {
  const id = Number(req.params.id);
  let nextPage = ''
  if (id === 2) {
    nextPage = '/results'
  } else {
    nextPage = '/deal/2'
  }
  db.getPlayersData(id).then(player => {
    let viewData = {
      nextPage: nextPage,
      id: player.id,
      player: player.name,
      total: player.hand_total,
      card1: player.card1,
      card2: player.card2,
      card3: player.card3
    };
    res.render("deal", viewData);
  });
});



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

