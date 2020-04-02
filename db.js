const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
  getCards,
  reshuffle,
  addCards,
  // getWinner,
  getRandomNumbers,
  getCard
}

//returning array of card values
function getCards() {
  var cardsPicked = []
  var nums = getRandomNumbers()

  for (i = 0; i < 3; i++) {
    cardsPicked.push(getCard(nums[i]))
  }
  return Promise.all(cardsPicked)
}

//returning 1 random not picked card
function getCard(id, db = database) {
  return db('card_deck')
    .where('id', id)
    .select()
    .first()
    .then()
}

// same as getCards
function reshuffle() {
  db('card_deck')
    .where('id', id)
    .select()
    .first()
}

function addCards() {
  var sum = cardArr.reduce((a, b) => a + b)
  return sum
}

// function getWinner()

function getRandomNumbers(db = database) {
  db('card_deck')
    .select()
    .then(v => {
      var drawn = []
      // console.log('v object contains', v)
      for (var i = 0; drawn.length < 0; i++) {
        let number = getRandomNumber()
        let checker = v.reduce((a,v) => a !== number ? v.value : a ,0)
        console.log(checker) 
      }
    })
      
      // for (var i = 0; drawn.length < 3; i++) {
        // v.value 
      //   if ('check if number has been taken === ') {
      //     drawn.push()
      //   }
      // }
      // return drawn
    // })

}

function getRandomNumber () {
return Math.floor(Math.random() * 21)
}
getRandomNumbers()
