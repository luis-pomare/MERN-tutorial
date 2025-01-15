require('dotenv').config()
const express = require('express');
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

app.listen(process.env.PORT, () => {
  console.log('Listening on port 4000 in your computer')
})
