/**
 * Module dependencies.
 */
import * as express from 'express'

/**
 * Create Express server.
 */
const app = express()

/**
 * Express configuration.
 */
// app.set('port', process.env.PORT || 3000)

/**
 * routes.
 */
app.get('/', require('./router'))

module.exports = app
