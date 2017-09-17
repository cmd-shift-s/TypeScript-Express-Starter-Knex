import { Router } from 'express'
const router = Router()

router.use('/', require('./controllers/home'))

module.exports = router
