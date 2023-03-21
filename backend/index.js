const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');


// connection to database
require('dotenv').config(); // hide password

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));


  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
app.use(bodyParser.json());

const userRoutes = require("./routes/user");
const matchupRoutes = require('./routes/matchup')
const championRoutes = require('./routes/champion')

app.use("/api/auth", userRoutes);
app.use("/api/matchup", matchupRoutes)
app.use("/api/champion", championRoutes)

module.exports = app;  