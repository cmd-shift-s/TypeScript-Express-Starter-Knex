import * as request from 'supertest'
import { Application } from 'express'

export default class Request {
  private _app: Application

  constructor(app: Application) {
    this._app = app
  }

  _request(method, url, status = 200) {
    return request(this._app)[method](`/${url}`).expect(status)
  }

  get(url, status = 200) {
    return this._request('get', url, status)
  }
}
