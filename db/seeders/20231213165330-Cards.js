'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          name: 'Сосиска в тесте',
          image:
            'https://damreceptic.ru/upload/resize_cache/dev2fun_opengraph/49b/1200_630_1/49b92e6e3cb28cb659d3b05195c8c3f6.jpg',
          description:
            'Это вкусная выпечка, которая превратит простое чаепитие в целое событие!',
          timing: 10,
          recipes:
            'Тесто дрожжевое, сосиски, желток, колбаса сервелат,мука пшеничная,изюм',
          favoriteId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Котлетки с пюре',
          image:
            'https://www.photorecept.ru/wp-content/uploads/2021/04/kotlety-s-pjure-941x1300.jpg',
          description: 'Домашние котлетки от прекрасной Людмилы Петровны',
          timing: 20,
          recipes: 'Картофель, фарш говяжий, специи, соль, хлеб, яйцо',
          favoriteId: 2,
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
