import { Router, Request, Response } from 'express'
import Echo from '../models/Echo'
import { wrap, error, validateQuery } from '../utils'

const router = Router()
const debug = require('debug')('ts-express:echo.controller')

router.get('/', validateQuery({msg: 'required'}), wrap(async (req: Request, res: Response) => {
  debug('[GET] /echo', req.query)

  const echo = new Echo({
    msg: req.query.msg
  })

  try {
    const result = await echo.save()
    res.json(result)
  } catch (e) {
    throw error(500, 'Database Error')
  }
}))

module.exports = router
