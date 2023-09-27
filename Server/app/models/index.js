const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("../models/user.model");
// db.role = require("./role.model");


//movies App
db.products = require("../models/product.model.js")(mongoose);
// db.wishlist = require('./wishlist.model')(mongoose);

module.exports = db;