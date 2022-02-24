require('dotenv').config()
const express = require('express')
const cors = require('cors')

const userRoutes = require('./routes/user.routes')
const providerRoutes = require('./routes/provider.routes')
const panicRoutes = require('./routes/panic.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

app.use('/user', userRoutes)
app.use('/provider', providerRoutes)
app.use('/panic', panicRoutes)

app.listen(5000, () => {
  console.log('Running at http://localhost:5000')
})
