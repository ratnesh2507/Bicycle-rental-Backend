const express = require('express');
const mongoose = require('mongoose');
const bikeRoute = require('./routes/bike.route.js');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/bikes', bikeRoute);

// Mongoose Connection
mongoose.connect('mongodb+srv://ratneshbvk2504:cqU4hUQPUNEQGI2u@bycycleapi.qdzgm6g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BycycleAPI')
  .then(() => {
    console.log('Database Connected!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    return `Error connecting to MongoDB - ${error}`;
  });