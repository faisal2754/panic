const router = require('express').Router()
const { createPanic } = require('../controllers/panic.controller')
const clientProtect = require('../middleware/clientAuth.middleware')
const providerProtect = require('../middleware/providerAuth.middleware')

router.post('/create', clientProtect, createPanic)
// router.get('/me', protect, me)

module.exports = router
