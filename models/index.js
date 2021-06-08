const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const productsModel = require('./products')
const manufacturersModel = require('./manufacturers')


const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const manufacturers = manufacturersModel(connection, Sequelize)

const products = productsModel(connection, Sequelize, manufacturers)

products.belongsTo(manufacturers)
manufacturers.hasMany(products)

module.exports = { products, manufacturers, Op: Sequelize.Op }

//
