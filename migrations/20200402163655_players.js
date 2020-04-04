exports.up = function (knex) {
  return knex.schema.createTable("players", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.integer("card1").defaultTo(0);
    table.integer("card2").defaultTo(0);
    table.integer("card3").defaultTo(0);
    table.integer("hand_total").defaultTo(0);
    table.integer("times_drawn").defaultTo(0);
    table.string("next_page");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("players");
};
