'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING
      },
      tagline: {
        type: Sequelize.STRING
      },
      start_date: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      end_date: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      registration_opens: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      registration_closes: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};
