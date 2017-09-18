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

  it('should return 400 Bad Request', async () => {
    const res = await req.get('echo', 400)
    expect(res.body.message).to.equal('Bad Request')
  })
})
