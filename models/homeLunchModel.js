var mongoose = require("mongoose");

var homeLunchSchema = new mongoose.Schema ({
    type: String,
    name: String,
    image: String
});

module.exports = mongoose.model("HomeLunch", homeLunchSchema);