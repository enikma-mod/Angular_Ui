const express = require("express");
const cors = require("cors");
const {log} = require("mercedlogger"); //colorful TERMINAL logs
require('dotenv').config();

const dbConfig = require("./app/config/dbconfig.js")
const app = express();
const authRoutes = require('../Server/app/routes/auth.routes.js');
const userRoutes = require('../Server/app/routes/user.routes.js'); 

var corsOptions = {
  origin: "*"
};

// GLOBAL MIDDLEWARE
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan("tiny")) // log the request for debugging

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Plant-Dads" });
});

// Import the mongoose object and the Product model
const mongoose = require("mongoose");
// const Product = require("./app/models/product.model")(mongoose);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  log.green("SERVER STATUS", `Plant-Dads server is running on port ${PORT}.`);
});

// require('./app/routes/auth.routes.js')(app);
require("./app/routes/product.routes.js")(app);


app.use('/auth', authRoutes);
app.use('/user', userRoutes);



mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {

    log.green("DATABASE STATE", "Successfully connected to PlantDads DB.");
    // You can perform any necessary initializations here.
  })
  .catch(err => {
    log.red("DATABASE STATE", "Connection error", err);
    process.exit();
  });
