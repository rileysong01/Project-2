const Sequelize = require('sequelize');
require('dotenv').config();

// let sequelize;

// sequelize = new Sequelize(process.env.DATABASE_URL);

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.HOST,
      dialect: "mysql",
      dialectOptions: {
        ssl: {
          rejectUnauthorized: true,
        },
      },
      define: {
        timestamps: false,
      },
    }
  );


try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
