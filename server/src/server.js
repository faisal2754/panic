const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/alert', async (req, res) => {
  res.json(req.body)
})

app.post('/register', async (req, res) => {})

app.listen(5000, () => {
  console.log('Running at http://localhost:5000')
})
