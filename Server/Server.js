const express = require("express");
const cors = require("cors");
require('dotenv').config();

const dbConfig = require("./app/config/dbconfig.js")
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Plant-Dads" });
});

// Import the mongoose object and the Product model
const mongoose = require("mongoose");
const Product = require("./app/models/product.model")(mongoose);


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Plant-Dads server is running on port ${PORT}.`);
});

// require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);
require("./app/routes/product.routes.js")(app);
// require("./app/routes/wishlist.routes")(app);

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(dbConfig.url)
    console.log("Successfully connect to MongoDB.");
    // You can perform any necessary initializations here.
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
