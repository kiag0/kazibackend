
/*
  # express app where all routes are defined 
  #
  #
*/

const express = require("express"); // unopinionated server creator
const bodyParser = require("body-parser"); // acces values from the body sent from the frontend and mobile app
const mongoose = require("mongoose"); // mongodb schema provider
const cors = require("cors"); // allows cross origin access


const userRoutes = require('./routes/user');
const workerRoutes = require('./routes/worker');
const searchRoutes = require('./routes/search');
const paymentRoutes = require('./routes/payment');


const app = express();

app.use(cors());
mongoose
  .connect(
    "mongodb+srv://agusto:agusto@valentine-bv3vp.mongodb.net/hymns?retryWrites=true&w=majority" // mongodb url
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS"
  );
  next();
});


// user routes

app.use('/api/user',userRoutes);
app.use('/api/worker', workerRoutes);
// app.use('/api/search', searchRoutes);
app.use('/api/payment', paymentRoutes);



module.exports = app;
