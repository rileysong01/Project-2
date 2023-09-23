// const Users = require('./Users');
// const Deck = require('./Deck');
const Decks = require('./Decks');
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



Card.sync({force:true}).then(() =>{
  card = Card.bulkCreate(dataEntires)
  // card.save()
}).then(() =>{
  console.log('created new card')
}).catch((err) => {
  console.log(err)
})



module.exports = {Card};
