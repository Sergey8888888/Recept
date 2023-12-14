'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Favorite }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Favorite, { foreignKey: 'cardId' });
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
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
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
