const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Players extends Model {}

Players.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deckID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'players',
  }
);

module.exports = Players;
