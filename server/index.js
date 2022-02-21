const express = require('express')

const app = express()

app.post('/alert', async () => {})

app.listen(5000, () => console.log('Running at http://localhost:5000'))
