const axios = require('axios')

const emptyReq = { msg: 'Please enter all fields' }

const reverseGeocode = async (req, res) => {
  const { locationLat, locationLong } = req.body

  if (!locationLat || !locationLong) {
    res.status(400).json(emptyReq)
  }

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationLat},${locationLong}&key=${process.env.GOOGLE_MAPS_KEY}`
  )

  return res.json({ data: response.data.results[0].formatted_address })
}

module.exports = reverseGeocode
