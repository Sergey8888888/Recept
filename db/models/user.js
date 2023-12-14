'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card, Favorite }) {
      this.hasMany(Card, { foreignKey: 'userId' });
      this.hasMany(Favorite, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
