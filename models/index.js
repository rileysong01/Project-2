const Players = require('./Players');
const PlayerDecks = require('./PlayerDecks');
const Card = require('./Card');
const Account = require('./Account')

// const CardsJson = require('../seeds/Cards.json')

// const keys = Object.keys(CardsJson)


// dataEntires = []


// keys.forEach(((key) => {

//   dataEntry = {
//     name: CardsJson[key].name,
//     cost: CardsJson[key].cost,
//     power: CardsJson[key].power,
//     cardDefImageID: CardsJson[key].CardDefId,
//     ability: CardsJson[key].abilities,
//     cardDescription: CardsJson[key].description
//   };
  
//   dataEntires.push(dataEntry)
// }))


Account.hasOne(Players, { constraints: false })

Players.hasMany(PlayerDecks,  { constraints: false } )
Card.hasMany(PlayerDecks,  { constraints: false })

// Card.hasMany

// Players.belongsTo(Account,{ constraints: false } )

// PlayerDecks.hasMany(Players, { constraints: false })
// PlayerDecks.hasMany(Card, { constraints: false })



Players.sync({alter:true})
PlayerDecks.sync({alter:true})
Account.sync({alter:true})
Card.sync({alter:true})

module.exports = {Card,PlayerDecks,Players,Account};