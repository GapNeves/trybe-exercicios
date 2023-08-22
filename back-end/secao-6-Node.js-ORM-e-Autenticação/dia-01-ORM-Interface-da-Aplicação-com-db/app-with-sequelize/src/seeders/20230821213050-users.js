'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  [
    {
      fullName: 'Leonardo',
      email: 'leo@test.com',
      // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      phoneNum: '+55 (31)97070-7070',
    },
    {
      fullName: 'JEduardo',
      email: 'edu@test.com',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      phoneNum: '+55 (31)98080-8080',
    }
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
