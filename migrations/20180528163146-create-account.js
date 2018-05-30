'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Accounts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: Sequelize.CHAR(256),
                allowNull: false
            },
            first_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            date_of_birth: {
                type: Sequelize.DATEONLY,
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
            banned: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            banned_until: {
                type: Sequelize.DATEONLY
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
        return queryInterface.dropTable('Accounts');
    }
};
