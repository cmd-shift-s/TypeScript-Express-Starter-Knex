import { expect } from 'chai'
import { req, tracker } from '../helpers'

describe('GET /echo', () => {
  it('should return to equal message', async () => {
    tracker.on('query', query => {
      expect(query.method).to.equal('insert')
      query.response([])
    })

    const res = await req.get('echo?msg=message')
    expect(res.body.msg).to.equal('message')
  })
})
