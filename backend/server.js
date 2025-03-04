require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// Create a express app
const app = express();


// Global middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/workouts', workoutRoutes)

// Connect to DB
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB and listening on port 4000 in your computer')
    })
  })
  .catch((error) => {
    console.log(error)
  })

