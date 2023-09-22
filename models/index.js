const User = require('./User');
const Deck = require('./Deck');
const Card = require('./Card');

Deck.hasMany(Card, {
  foreignKey: 'deck_id',
});

Card.belongsTo(Deck, {
  foreignKey: 'deck_id',
});

module.exports = { User, Deck, Card };
