import db from '../db'

export default class Echo extends db.Model<Echo> {
  get tableName() { return 'echo' }
}
