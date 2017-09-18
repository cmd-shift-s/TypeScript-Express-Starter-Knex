import { expect } from 'chai'
import * as request from 'supertest'
const app = require('../../src/app')

describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const res = await request(app).get('/').expect(200)
    expect(res.text).equals('Hello World!')
  })
})
