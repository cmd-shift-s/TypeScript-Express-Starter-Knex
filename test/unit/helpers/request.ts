import * as request from 'supertest'
import { Application } from 'express'

export default class Request {
  private _app: Application

  constructor(app: Application) {
    this._app = app
  }

  _request(method: string, url: string, status: number = 200) {
    return (request(this._app) as any)[method](`/${url}`).expect(status)
  }

  get(url: string, status: number = 200) {
    return this._request('get', url, status)
  }
}
