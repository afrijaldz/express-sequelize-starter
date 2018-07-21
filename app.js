require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const routes = require('./src/routes')

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// inisialisasi routes
app.use(routes(express))

// port
const PORT = process.env.PORT

// run server
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`)
})