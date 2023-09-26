const Players = require('./Players');
const PlayerDecks = require('./PlayerDecks');
const Card = require('./Card');
const Account = require('./Account');




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

