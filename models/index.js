const Players = require('./Players');
const Deck = require('./Deck');
const PlayerDecks = require('./PlayerDecks');
const Card = require('./Card');
const Category = require('./Category');
const FeatureCard = require('./FeatureCard');

Card.belongsTo(Deck, {
  foreignKey: 'deck_id',
});

Deck.hasMany(Card, {
  foreignKey: 'deck_id',
});

FeatureCard.belongsTo(Card, {
  foreignKey: 'cardID',
});

Players.belongsTo(PlayerDecks, {
  foreignKey: 'deckID',
});

Deck.belongsTo(PlayerDecks, {
  foreignKey: 'deckID',
});

Deck.belongsTo(Card, {
  foreignKey: 'cardID',
});

module.exports = { Players, Deck, PlayerDecks, FeatureCard, Card };
