const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

xtest('check if get card is working', () => {
  return db.getCard(5, testDb)
    .then(card => {
      expect(card.id).toBe(5)
      expect(typeof (card)).toBe('object')
    })
})

test.only('check if getRandomNumbers works', () => {
  return db.getRandomNumbers(testDb)
    .then(cards => {
      expect(cards.length).toBe(3)
    })
})

xtest('check if getRandomNumbers updates drawn', () => {
  return db.getRandomNumbers(testDb)
    .then(card => {
      expect(card.id).toBe(5)
      expect(card.drawn).toBe(true)
    })
})

xtest('check if get randomnumber function returns a random number', () => {
  const num = db.getRandomNumber()
  
  expect(true).toBeTruthy()
})

// test('check if reshuffle is working' , ()) = > {
//   return
// }
