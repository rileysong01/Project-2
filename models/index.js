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



module.exports = {Card,Players,Deck};

