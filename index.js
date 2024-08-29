const express = require('express');
const mongoose = require('mongoose');
const bikeRoute = require('./routes/bike.route.js');
const app = express();
const cors = require('cors');
require('dotenv').config();
port = process.env.PORT || 3000;

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
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    return `Error connecting to MongoDB - ${error}`;
  });