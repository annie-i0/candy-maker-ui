const Sequelize = require('sequelize')
const productsModel = require('./products')
const manufacturersModel = require('./manufacturers')


const connection = new Sequelize('candies', 'candies', 'C4nd13$!',
  { host: 'localhost', dialect: 'mysql' })

const manufacturers = manufacturersModel(connection, Sequelize)

const products = productsModel(connection, Sequelize, manufacturers)

products.belongsTo(manufacturers)
manufacturers.hasMany(products)

module.exports = { products, manufacturers, Op: Sequelize.Op }

//
