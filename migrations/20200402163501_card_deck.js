
exports.up = function(knex) {
  return knex.schema.createTable('card_deck', (table) => {
    table.increments('id').primary()
    table.integer('value')
    table.boolean('drawn').defaultTo(false)
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('card_deck')
};
