const Users = require('./Users');
const Deck = require('./Deck');
const Decks = require('./Decks');
const Card = require('./Card');
const Category = require('./Category');
const FeatureCard = require('./FeatureCard');

Card.belongsTo(Deck, {
  foreignKey: 'deck_id',
});

FeatureCard.belongsTo(Card, {
  foreignKey: 'cardID',
});

Users.belongsTo(Decks, {
  foreignKey: 'deckID',
});

Decks.belongsTo(Deck, {
  foreignKey: 'deckID',
});

Deck.belongsTo(Card, {
  foreignKey: 'cardID',
});

module.exports = { User, Deck, Card };
