const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const dotenv = require("dotenv").config()
var cors = require('cors')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
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

app.put('/', (req, res, next) => {
  knex('flash').insert({name: ".austin"})
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

app.delete('/:id', (req, res, next) => {
  knex('flash').where('id', req.params.id).del()
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({ error: { message: 'SERVER ERROR WHAAT?!' } })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Route not found, dude.' } })
})

app.listen(port, () => console.log(`jsflashbackend listening on port ${port}!`))