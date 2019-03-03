var mongoose = require("mongoose");

var homeDinnerSchema = new mongoose.Schema ({
    type: String,
    name: String,
    image: String
});

module.exports = mongoose.model("HomeDinner", homeDinnerSchema);