// const seedPlayers = require('./players-seed.js');
const dataEntries = require('./seed.js')
const sequelize = require('../config/connection.js');
const Card = require('../models/Card.js')

const seedDB = async () => {
    await sequelize.sync({force:true});
    // console.log(dataEntries)

    const cards = await Card.bulkCreate(dataEntries)
    console.log(cards )
    // await seedPlayers();
    console.log(' Players seeded')

    process.exit(0);
}

seedDB();