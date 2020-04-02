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

test('check if get card is working', () => {
  return db.getCard(5, testDb)
    .then(card => {
      expect(card.id).toBe(5)
      expect(typeof (card)).toBe('object')
    })
})
