require('dotenv').config()
const express = require('express');

// Create a express app
const app = express();

// Global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.get('/', (req, res) => {
  res.json({ mssg: 'wellcome to the app Luis' })
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port 4000 in your computer')
})
