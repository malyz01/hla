exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("players").insert([
        { id: 1, name: "Player 1", next_page: "/deal/2", hand_total: 0 },
        { id: 2, name: "Player 2", next_page: "/results", hand_total: 0 },
      ]);
    });
};
