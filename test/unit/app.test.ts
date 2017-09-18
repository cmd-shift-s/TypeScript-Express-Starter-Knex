import { expect } from 'chai'
import { req } from './helpers'

describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const res = await req.get('')
    expect(res.text).equals('Hello World!')
  })
})

describe('GET /not_found', () => {
  it('should return 404', async () => {
    const res = await req.get('not_found', 404)
    expect(res.body.message).equals('Not Found')
  })
})
