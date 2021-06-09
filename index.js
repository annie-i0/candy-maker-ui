const express = require('express')
const cors = require('cors')
const path = require('path')
const { getAllManufacturers, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductsById } = require('./controllers/products')

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
)

// API Routes
app.get('/api/manufacturers', getAllManufacturers)
app.get('/api/manufacturers/:name', getManufacturerById)
app.get('/api/products', getAllProducts)
app.get('/api/products/:name', getProductsById)

// React Route
app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'public/index.html'))
})

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
