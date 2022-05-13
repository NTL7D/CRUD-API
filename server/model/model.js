const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: String
})

const ProductDB = mongoose.model('ProductDB',schema);

module.exports = ProductDB;
