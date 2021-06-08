// // 'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('manufacturers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      country: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultVlaue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE') },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('products',
      {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING, allowNull: false },
        yearIntroduced: { type: Sequelize.DATEONLY },
        manufacturerID: { type: Sequelize.INTEGER, references: { model: 'manufacturers', key: 'id' } },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        updatedAt: { type: Sequelize.DATE, defaultVlaue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE') },
        deletedAt: { type: Sequelize.DATE },
      })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products')

    return queryInterface.dropTable('manufacturers')
  }
}
