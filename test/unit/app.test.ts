import { expect } from 'chai'
import * as request from 'supertest'
const app = require('../../src/app')

describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const res = await request(app).get('/').expect(200)
    expect(res.text).equals('Hello World!')
  })
})

describe('GET /not_found', () => {
  it('should return 404', async () => {
    const res = await request(app).get('/not_found').expect(404)
    expect(res.body.message).equals('Not Found')
  })
})
