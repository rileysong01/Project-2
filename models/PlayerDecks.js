const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlayerDecks extends Model {}

PlayerDecks.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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


// playerID: {
//   type: DataTypes.BIGINT,
//   allowNull: false,
//   /* references: {
//     model: 'deck',
//     key: 'id', 
//   }, */
// },
// deckID: {
//   type: DataTypes.BIGINT,
//   allowNull: false,
//   /* references: {
//     model: 'deck',
//     key: 'id', 
//   }, */
// },

module.exports = PlayerDecks;
