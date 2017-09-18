import * as Knex from 'knex'
import * as Bookshelf from 'bookshelf'
import * as MockKnex from 'mock-knex'

const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'

export const knex = Knex(config[env])

if (env === 'test') {
  MockKnex.mock(knex)
}

export default Bookshelf(knex)
