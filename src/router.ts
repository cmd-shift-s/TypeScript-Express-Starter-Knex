import { Router } from 'express'
const router = Router()

router.use('/', require('./controllers/home'))
router.use('/echo', require('./controllers/echo'))

module.exports = router
