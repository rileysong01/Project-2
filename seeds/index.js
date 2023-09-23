const seedPlayers = require('./players-seed.js');

const sequelize = require('../config/connection.js');

const seedDB = async () => {
    await sequelize.sync({force:true});
    console.log('DB SYNCED')

    await seedPlayers();
    console.log(' Players seeded')

    process.exit(0);
}

seedDB();