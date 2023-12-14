'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Василий',
          email: '1@1',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Иван',
          email: '2@2',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
