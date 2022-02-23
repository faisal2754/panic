const router = require('express').Router()
const { register, login, me } = require('../controllers/user.controller')
const protect = require('../middleware/clientAuth.middleware')

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, me)

module.exports = router
