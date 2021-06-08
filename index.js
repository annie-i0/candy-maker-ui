const express = require('express')
const path = require('path')
const { getAllProducts, getProductsById } = require('./controller/products')
const { getAllManufacturers, getManufacturerById } = require('./controller/manufacturers')
// const products = require('./models/products')

const app = express()

app.use(express.static('public'))

app.get('/api/products', getAllProducts)

app.get('/api/products/id:', getProductsById)

app.get('/api/manufacturers', getAllManufacturers)

app.get('/api/manufacturers/:name', getManufacturerById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))


app.listen(1360, () => {
  console.log('Listening on port 1360...') // eslint-disable-line no-console
})

