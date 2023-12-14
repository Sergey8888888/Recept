'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Favorite }) {
      this.belongsTo(Favorite, { foreignKey: 'favoriteId' });
    }
  }
  Card.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      timing: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      recipes: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      favoriteId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Favorites',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
