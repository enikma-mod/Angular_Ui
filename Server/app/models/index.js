const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// db.user = require("./user.model");
// db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

//movies App
db.movies = require("./product.model.js").default(mongoose);
// db.wishlist = require('./wishlist.model')(mongoose);

module.exports = db;