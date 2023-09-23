const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlayerDecks extends Model {}

PlayerDecks.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    deckID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      /* references: {
        model: 'deck',
        key: 'id', 
      }, */
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
    modelName: 'playerdecks',
  }
);

module.export = PlayerDecks;
