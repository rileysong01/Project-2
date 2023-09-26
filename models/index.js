const Players = require('./Players');
const PlayerDecks = require('./PlayerDecks');
const Card = require('./Card');
const Account = require('./Account');

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


// Card.sync({force:true}).then(() =>{
//     card = Card.bulkCreate(dataEntires)
//     // card.save()
//   }).then(() =>{
//     console.log('created new card')
//   }).catch((err) => {
//     console.log(err)
//   })

Players.hasMany(PlayerDecks, { constraints: false });
// Card.hasMany(PlayerDecks,  { constraints: false })

Players.sync();
PlayerDecks.sync();
Account.sync();
Card.sync()
  


module.exports = { Card, PlayerDecks, Players, Account };

