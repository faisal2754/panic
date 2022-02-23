const router = require('express').Router()
const { register, login, me } = require('../controllers/provider.controller')
const protect = require('../middleware/providerAuth.middleware')

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, me)

module.exports = router
