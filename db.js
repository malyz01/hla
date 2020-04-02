const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
  getCards,
  reshuffle,
  addCards,
  // getWinner,
  getRandomNumbers,
  getRandomNumber,
  getCard
}

// returning array of card values
function getCards () {
  var cardsPicked = []
  var nums = getRandomNumbers()

  for (var i = 0; i < 3; i++) {
    cardsPicked.push(getCard(nums[i]))
  }
  return Promise.all(cardsPicked)
}


// returning 1 random not picked card
function getCard (id, db = database) {
  return db('card_deck')
    .where('id', id)
    .select()
    .first()
    .then()
}

// same as getCards
function reshuffle () {
  db('card_deck')
    .where('id', id)
    .select()
    .first()
}

function addCards () {
  var sum = cardArr.reduce((a, b) => a + b)
  return sum
}

// function getWinner()

function getRandomNumbers (db = database) {
  return db('card_deck')
    .select()
    .then(v => {
      var drawn = []
      while (drawn.length < 3) {
        let ran = getRandomNumber()
        let picked = v.filter(num => num.value === ran)
        if (!picked.drawn) {
          drawn.push(ran)
          db('card_deck')
            .where('id', picked.id)
            .update({ drawn: true })
        }
      }
      console.log(drawn)
      return drawn
    })
}

function getRandomNumber () {
  return Math.floor(Math.random() * 21)
}
getRandomNumbers()
