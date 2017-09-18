import { expect } from 'chai'
import { req } from '../helpers'

describe('GET /echo', () => {
  it('should return to equal message', async () => {
    const res = await req.get('echo?msg=message')

    expect(res.body.msg).to.equal('message')
  })
})
