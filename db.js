const knex = require("knex");
const config = require("./knexfile").development;
const database = knex(config);

module.exports = {
  getCards,
  reshuffle,
  addCards,
  // getWinner,
  getRandomNumbers,
  getRandomNumber,
  getCard,
  getPlayersData,
  updatePlayer,
  updatePicked,
  getWinner,
  getPlayersTable,
  resetDatabase
};


// returning array of card values
function getCards() {
  var cardsPicked = [];
  var nums = getRandomNumbers();

  for (var i = 0; i < 3; i++) {
    cardsPicked.push(getCard(nums[i]));
  }
  return Promise.all(cardsPicked);
}

// returning 1 random not picked card
function getCard(id, db = database) {
  return db("card_deck")
    .where("id", id)
    .select()
    .first()
    .then();
}

// same as getCards
function reshuffle() {
  db("card_deck")
    .where("id", id)
    .select()
    .first();
}

function addCards() {
  var sum = cardArr.reduce((a, b) => a + b);
  return sum;
}

// function getWinner()

function getRandomNumbers(db = database) {
  return db("card_deck")
    .select()
    .then(v => {
      var drawn = [];
      while (drawn.length < 3) {
        let ran = getRandomNumber();
        let picked = v.filter(num => num.value === ran);
        if (!picked.drawn) drawn.push(ran);
      }
      return drawn;
    });
}

function updatePicked(id, db = database) {
  return db("card_deck")
    .where("id", id)
    .update({ drawn: true });

}

function getRandomNumber() {
  return Math.floor((Math.random() * (21 - 1)) + 1)
}

function getPlayersData(id, db = database) {
  return db("players")
    .where("id", id)
    .select()
    .first();
}

function updatePlayer(id, data, db = database) {
  return db("players")
    .where("id", id)
    .update({
      hand_total: data.reduce((a, v) => a + v),
      card1: data[0],
      card2: data[1],
      card3: data[2]
    });
}

function getPlayersTable(db = database) {
  return db('players')
  .select()
}

function getWinner() {
return getPlayersTable()
.then(data => {
 return data.reduce((a,v) => {
    if(a > v.hand_total) {
      return a
    } else {
      return v
    }
  }, 0)
})
}

function resetDatabase(db = database) {
  db.seed.run()
}