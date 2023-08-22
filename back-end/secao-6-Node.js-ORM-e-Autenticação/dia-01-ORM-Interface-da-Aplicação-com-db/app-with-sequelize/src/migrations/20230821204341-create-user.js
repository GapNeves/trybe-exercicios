'use strict';

module.exports = {
  /*  Ambos os parâmetros são objetos que armazenam dados e operações. O queryInterface é usado pela biblioteca para modificar o banco de dados, seguindo o “dialeto” do banco que estamos utilizando. O objeto Sequelize armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar, string, integer, date etc. */
  up: async (queryInterface, Sequelize) => {
    // O que significa cada uma das propiredades:
    // allowNull: Define se o campo pode ou não receber um valor null;
    // autoIncrement: Define se o campo vai ter incremento automático;
    // primaryKey: Define se o campo é uma chave primária;
    // type: Define o tipo do campo, por exemplo STRING, INTEGER, DATE, etc.
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('Users');
  }
};
