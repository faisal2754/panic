const router = require('express').Router()
const reverseGeocode = require('../controllers/reverseGeocode.controller')
const providerProtect = require('../middleware/providerAuth.middleware')

router.post('/reverse-geocode', providerProtect, reverseGeocode)

module.exports = router
