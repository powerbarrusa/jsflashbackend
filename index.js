const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const dotenv = require("dotenv").config()
var cors = require('cors')

const env = 'production'
const config = require('./knexfile')[env]
const knex = require('knex')(config)

app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  knex('flash')
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

  app.listen(port, () => console.log(`jsflashbackend listening on port ${port}!`))