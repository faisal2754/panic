require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', userRoutes)

app.listen(5000, () => {
  console.log('Running at http://localhost:5000')
})
