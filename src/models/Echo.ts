import db from '../db'

export class Echo extends db.Model<Echo> {
  get tableName() { return 'echo' }
}
