'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          name: 'Том-Ям',
          image:
            'https://s6.stc.all.kpcdn.net/family/wp-content/uploads/2023/03/kak-pravilno-est-tom-yam-960-960x540.jpg',
          description: 'Здесь будет способ приготовления супа Том-Ям',
          timing: 30,
          recipes: 'Здесь будет список ингредиентов',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Пельмени домашние',
          image:
            'https://img.povar.ru/mobile/76/1e/59/3f/pelmeni_s_gruzdyami-811891.JPG',
          description: 'Здесь будет способ приготовления домашних пельменей',
          timing: 10,
          recipes: 'Здесь будет список ингридиентов',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
