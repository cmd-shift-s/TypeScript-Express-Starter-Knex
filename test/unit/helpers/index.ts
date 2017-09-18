import Request from './request'
import * as MockKnex from 'mock-knex'
import { Application } from 'express'
import * as App from '@/app'

export const app = App as Application

export const req = new Request(app)

export const tracker = MockKnex.getTracker()

beforeEach(() => {
  tracker.install()
})

afterEach(() => {
  tracker.uninstall()
})
