import Request from './request'
import { Application } from 'express'

export const app: Application = require('../../../src/app')

export const req = new Request(app)

