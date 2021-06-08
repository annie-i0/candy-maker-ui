// const { Sequelize } = require('sequelize')
const models = require('../models')
// const manufacturers = require('../models/manufacturers')

const getAllManufacturers = async (request, response) => {
  const manufacturers = await models.manufacturers.findAll({
    include: [{ model: models.products }]
  })

  return response.send(manufacturers)
}

const getManufacturerById = async (request, response) => {
  const { name } = request.params
  console.log(name)
  const manufacturer = await models.manufacturers.findOne({
    attributes: ['id', 'name', 'country'],
    where: { name: { [models.Op.like]: `%${name}%` } },
    include: [{ model: models.products }]
  })

  return manufacturer
    ? response.send(manufacturer)
    : response.sendStatus(404)
}

module.exports = { getAllManufacturers, getManufacturerById }
