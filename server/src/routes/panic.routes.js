const router = require('express').Router()
const {
  createPanic,
  getPanics,
  updatePanic
} = require('../controllers/panic.controller')
const clientProtect = require('../middleware/clientAuth.middleware')
const providerProtect = require('../middleware/providerAuth.middleware')

router.post('/create', clientProtect, createPanic)
router.post('/update', providerProtect, updatePanic)
router.get('/all', providerProtect, getPanics)

module.exports = router
