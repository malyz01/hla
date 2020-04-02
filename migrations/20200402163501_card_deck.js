
exports.up = function(knex) {
  return knex.schema.createTable('card_deck', (table) => {
    table.increments('id').primary()
    table.integer('value')
    table.integer('times_drawn')
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('card_deck')
};
