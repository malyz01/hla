const knex = require("knex");
const config = require("./knexfile").development;
const db = knex(config);

module.exports = {
  getCards,
  reshuffle,
  addCards,
  // getWinner,
  getRandomNumber,
  getCard,
};

function getCards() {
    var cardsPicked = []
    for (i = 0; i < 3; i++) {
    cardsPicked.push(getRandomNumber())
    }
    console.log(cardsPicked)
  } 
  
 
function getCard(id) {
  return db('card_deck')
  .where('id', id)
  .select()
}

//same as getCards 
function reshuffle() {
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


function addCards() {
var sum = cardArr.reduce((a, b) => a +b)
return sum
}
 

// function getWinner()

function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}
