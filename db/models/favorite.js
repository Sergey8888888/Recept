'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Card }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Card, { foreignKey: 'cardId' });
    }
  }
  Favorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      cardId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Cards',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};
