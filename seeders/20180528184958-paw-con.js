'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Organization', [{
            name: 'Pacific Anthropomorphics League',
            short_name: 'PAWCon',
            address_line_1: '28 Tanglewood Trail',
            address_line_2: null,
            city: 'Santa Cruz',
            state: 'CA',
            country: 'USA',
            postal_code: '00000'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Organization', null, {});
    }
};
