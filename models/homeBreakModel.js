var mongoose = require("mongoose");

var homeBreakfastSchema = new mongoose.Schema ({
    type: String,
    name: String,
    image: String
});

module.exports = mongoose.model("HomeBreakfast", homeBreakfastSchema);