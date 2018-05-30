'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Organization', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            short_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address_line_1: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address_line_2: Sequelize.STRING,
            city: {
                type: Sequelize.CHAR(100),
                allowNull: false
            },
            state: {
                type: Sequelize.CHAR(100),
                allowNull: false,
            },
            country: {
                type: Sequelize.CHAR(100),
                allowNull: false
            },
            postal_code: {
                type: Sequelize.CHAR(30),
                allowNull: false
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Organizations');
    }
};
