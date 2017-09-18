import { Router, Request, Response } from 'express'

const router = Router()
const debug = require('debug')('ts-express:echo.controller')

router.get('/', (req: Request, res: Response) => {
  debug('[GET] /echo', req.query)

  res.json(req.query)
})

module.exports = router
