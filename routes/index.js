const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.resetDatabase();
  res.render("index");
});

router.post("/deal/:id", (req, res) => {
  const id = req.params.id;
  db.getRandomNumbers()
    .then((numbers) => {
      return Promise.all(
        numbers.map((num) => {
          return db.updatePicked(num);
        })
      ).then(() => numbers);
    })
    .then((numbers) => db.updatePlayer(id, numbers))
    .then(() => res.redirect(`/deal/${id}`));
});

router.get("/deal/:id", (req, res) => {
  const id = Number(req.params.id);

  db.getPlayersData(id).then((player) => {
    let viewData = {
      nextPage: player.next_page,
      id: player.id,
      player: player.name,
      total: player.hand_total,
      card1: player.card1,
      card2: player.card2,
      card3: player.card3,
      drawStatus: player.times_drawn >= 2,
    };
    res.render("deal", viewData);
  });
});

router.get("/results", (req, res) => {
  db.getWinner().then((player) => {
    let result = {
      winner: player.name,
    };
    res.render("results", result);
  });
});

module.exports = router;
