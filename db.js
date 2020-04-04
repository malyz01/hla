const knex = require("knex");
const config = require("./knexfile").development;
const database = knex(config);

module.exports = {
  getRandomNumbers,
  getPlayersData,
  updatePlayer,
  updatePicked,
  getWinner,
  resetDatabase,
};

function getRandomNumbers(db = database) {
  return db("card_deck")
    .select()
    .then((v) => {
      var drawn = [];
      while (drawn.length < 3) {
        let ran = getRandomNumber();
        let picked = v.filter((num) => num.value === ran)[0];
        if (!picked.drawn && !drawn.includes(ran)) drawn.push(ran);
      }
      return drawn;
    });
}

function updatePicked(id, db = database) {
  return db("card_deck").where("id", id).update({ drawn: true });
}

function getRandomNumber() {
  return Math.floor(Math.random() * (21 - 1) + 1);
}

function getPlayersData(id, db = database) {
  return db("players").where("id", id).select().first();
}

function updatePlayer(id, data, db = database) {
  return db("players")
    .where("id", id)
    .increment("times_drawn")
    .update({
      hand_total: data.reduce((a, v) => a + v),
      card1: data[0],
      card2: data[1],
      card3: data[2],
    });
}

function getPlayersTable(db = database) {
  return db("players").select();
}

function getWinner() {
  return getPlayersTable().then((data) => {
    if (data[0].hand_total > data[1].hand_total) {
      return data[0];
    } else {
      return data[1];
    }
  });
}

function resetDatabase(db = database) {
  db.seed.run();
}
