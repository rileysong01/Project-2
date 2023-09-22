const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FeatureCard extends Model {}

FeatureCard.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    cardID: {
      type: DataTypes.BIGINT,
      /* allowNull: false, */
      references: {
        model: 'card',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'featurecard',
  }
);

module.exports = FeatureCard;
