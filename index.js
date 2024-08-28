const express = require('express');
const mongoose = require('mongoose');
const bikeRoute = require('./routes/bike.route.js');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/api/bikes', bikeRoute);


// Mongoose Connection
mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Database Connected!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    return `Error connecting to MongoDB - ${error}`;
  });