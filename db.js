const knex = require("knex");
const config = require("./knexfile").development;
const db = knex(config);

module.exports = {
  getCards,
  reshuffle,
  addCards,
  getWinner
};

function getCards() {
  var cardArr = [];
  for (i = 0; i < 3; i++) {
    var id = getRandomNumber();
    db(card_deck)
      .where("id", id)
      .select()
      .then(card => cardArr.push(card));
  }
  return cardArr;
}

function reshuffle() {}

function addCards() {}

function getWinner() {}

function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}
