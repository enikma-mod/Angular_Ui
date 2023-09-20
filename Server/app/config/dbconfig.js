// Import the dotenv package at the top of your file
require('dotenv').config();
module.exports = {
    url: process.env.DATABASE_URL,
    Port: process.env.PORT
};
