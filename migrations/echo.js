exports.up = function (knex) {
  return knex.schema
    .createTable('echo', table => {
      table.increments('id').primary()
      table.string('msg')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTable('echo')
}
