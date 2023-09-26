const Players = require('./Players');
const PlayerDecks = require('./PlayerDecks');
const Card = require('./Card');
const Account = require('./Account');



Players.hasMany(PlayerDecks, { constraints: false });
// Card.hasMany(PlayerDecks,  { constraints: false })

Players.sync();
PlayerDecks.sync();
Account.sync();
Card.sync()
  


module.exports = { Card, PlayerDecks, Players, Account };

