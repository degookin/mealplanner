var mongoose = require("mongoose");

var restBreakfastSchema = new mongoose.Schema ({
    type: String,
    name: String,
    category: String,
    image: String,
    price: String,
    rating: String
});

module.exports = mongoose.model("RestBreakfast", restBreakfastSchema);