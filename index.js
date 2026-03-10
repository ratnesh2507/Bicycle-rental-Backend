const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const bikeRoute = require("./routes/bike.route");
const authRoute = require("./routes/auth.route");
const rentalRoute = require("./routes/rental.route");

const app = express();
const port = process.env.PORT || 3000;

// ── Middlewares ───────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/bikes", bikeRoute);
app.use("/api/rentals", rentalRoute);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database Connected!");
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((error) => console.error(`Error connecting to MongoDB - ${error}`));
