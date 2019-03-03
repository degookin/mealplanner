var mongoose = require("mongoose");

var restLunchSchema = new mongoose.Schema ({
    type: String,
    name: String,
    category: String,
    image: String,
    price: String,
    rating: String,
    comments: String
});

module.exports = mongoose.model("RestLunch", restLunchSchema);