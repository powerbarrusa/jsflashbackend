const express = require('express')
const app = express()
const port = process.env.PORT || 3001
var cors = require('cors')

const env = 'development'
const config = require('./knexfile')[env]
const knex = require('knex')(config)

const sql = knex('jsflash').toString()
console.log(sql)

app.use(cors())

app.get('/', (req, res, next) => {
  knex('flash')
  // knex('methods') - secret shorthand
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

  app.listen(port, () => console.log(`jsflashbackend listening on port ${port}!`))