// const Users = require('./Users');
// const Deck = require('./Deck');
const Decks = require('./Decks');
const Players = require('./Players');
const Deck = require('./Deck');
const PlayerDecks = require('./PlayerDecks');
const Card = require('./Card');
const Category = require('./Category');
const FeatureCard = require('./FeatureCard');
const CardsJson = require('../seeds/Cards.json')

const keys = Object.keys(CardsJson)


dataEntires = []

keys.forEach(((key) => {

  dataEntry = {
    name: CardsJson[key].name,
    cost: CardsJson[key].cost,
    power: CardsJson[key].power,
    cardDefImageID: CardsJson[key].CardDefId,
    ability: CardsJson[key].abilities,
    cardDescription: CardsJson[key].description
  };
  
  dataEntires.push(dataEntry)
}))

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





Card.sync({force:true}).then(() =>{
  card = Card.bulkCreate(dataEntires)
  // card.save()
}).then(() =>{
  console.log('created new card')
}).catch((err) => {
  console.log(err)
})



module.exports = {Card};
module.exports = { Players, Deck, PlayerDecks, FeatureCard, Card };
