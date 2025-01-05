const express = require('express');

// Create a express app
const app = express();

// Routes
app.get('/', (req, res) => {
  res.json({ mssg: 'wellcome to the app Luis' })
})

app.listen(4000, () => {
  console.log('Listening on port 4000 in your computer')
})
