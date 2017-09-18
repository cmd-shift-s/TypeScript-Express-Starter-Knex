import Request from './request'
import * as MockKnex from 'mock-knex'
import { Application } from 'express'

export const app: Application = require('../../../src/app')

export const req = new Request(app)

export const tracker = MockKnex.getTracker()

beforeEach(() => {
  tracker.install()
})

afterEach(() => {
  tracker.uninstall()
})
