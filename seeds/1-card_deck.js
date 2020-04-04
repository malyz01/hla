exports.seed = (knex) => {
  return knex("card_deck")
    .del()
    .then(() =>
      knex("card_deck").insert([
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
        { id: 7, value: 7 },
        { id: 8, value: 8 },
        { id: 9, value: 9 },
        { id: 10, value: 10 },
        { id: 11, value: 11 },
        { id: 12, value: 12 },
        { id: 13, value: 13 },
        { id: 14, value: 14 },
        { id: 15, value: 15 },
        { id: 16, value: 16 },
        { id: 17, value: 17 },
        { id: 18, value: 18 },
        { id: 19, value: 19 },
        { id: 20, value: 20 },
      ])
    );
};
