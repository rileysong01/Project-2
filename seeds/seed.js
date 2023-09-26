const sequelize = require('../config/connection');
const Card  = require('../models/Card');
const CardsJson = require('./Cards.json')

const keys = Object.keys(CardsJson)

const dataEntires = []

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

console.log(dataEntires)

console.log(dataEntires[0])

module.exports = dataEntires;