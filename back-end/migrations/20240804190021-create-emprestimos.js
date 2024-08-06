'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lending', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      saldoDevedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      juros: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      saldoDevedorAjustado: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valorParcela: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vencimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lending');

  }
};
