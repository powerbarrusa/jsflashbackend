
exports.up = function(knex, Promise) {
  return knex.schema.createTable('flash', table => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('example')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flash')
}
