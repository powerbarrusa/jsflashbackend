const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var cors = require('cors')
const env = require("dotenv").config()

// const env = 'development'
const config = require('./knexfile')[env]
const knex = require('knex')(config)

app.use(cors())

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