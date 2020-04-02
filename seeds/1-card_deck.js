var value = "vlue"
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('card_deck').del()
    .then(function () {
      // Inserts seed entries
      

      return knex('card_deck').insert([
        {'id': 1, 'value': 1, 'times_drawn': 0},
        {'id': 2, 'value': 2, 'times_drawn': 0},
        {'id': 3, 'value': 3, 'times_drawn': 0},
        {'id': 4, 'value': 4, 'times_drawn': 0},
        {'id': 5, 'value': 5, 'times_drawn': 0},
        {'id': 6, 'value': 6, 'times_drawn': 0},
        {'id': 7, 'value': 7, 'times_drawn': 0},
        {'id': 8, 'value': 8, 'times_drawn': 0},
        {'id': 9, 'value': 9, 'times_drawn': 0},
        {'id': 10, 'value': 10, 'times_drawn': 0},
        {'id': 11, 'value': 11, 'times_drawn': 0},
        {'id': 12, 'value': 12, 'times_drawn': 0},
        {'id': 13, 'value': 13, 'times_drawn': 0},
        {'id': 14, 'value': 14, 'times_drawn': 0},
        {'id': 15, 'value': 15, 'times_drawn': 0},
        {'id': 16, 'value': 16, 'times_drawn': 0},
        {'id': 17, 'value': 17, 'times_drawn': 0},
        {'id': 18, 'value': 18, 'times_drawn': 0},
        {'id': 19, 'value': 19, 'times_drawn': 0},
        {'id': 20, 'value': 20, 'times_drawn': 0},
                 
      ]);
    });
};
