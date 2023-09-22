const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Decks extends Model {}

Decks.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    deckID: {
      type: DataTypes.BIGINT,
      /* allowNull: false, */
      references: {
        model: 'deck',
        key: 'id',
      },
    },
    deckName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'decks',
  }
);

module.export = Decks;
