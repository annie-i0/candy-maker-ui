// 'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('manufacturers', [{
      name: 'August Storck KG',
      country: 'DE'
    }, {
      name: 'Cadbury',
      country: 'UK',
    }])

    return queryInterface.bulkInsert('products', [{
      name: 'Mamba',
      yearIntroduced: '1953-01-01',
      manufacturerId: 1
    }, {
      name: 'Caramello',
      yearIntroduced: '1976-01-01',
      manufacturerId: 2
    }])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('manufacturers')

    return queryInterface.bulkDelete('products')
  }
}
