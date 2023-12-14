'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Card }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Card, { foreignKey: 'favoriteId' });
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
    },
    {
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};
