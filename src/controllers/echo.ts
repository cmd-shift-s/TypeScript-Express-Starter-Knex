import { Router, Request, Response } from 'express'
import Echo from '../models/Echo'

const router = Router()
const debug = require('debug')('ts-express:echo.controller')

router.get('/', (req: Request, res: Response) => {
  debug('[GET] /echo', req.query)

  const echo = new Echo({
    msg: req.query.msg
  })

  echo.save()
    .then(result => {
      res.json(result)
    })
})

module.exports = router
