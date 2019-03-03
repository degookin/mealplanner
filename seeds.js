var mongoose = require("mongoose"),
    HomeBreakfast = require("./models/homeBreakModel");
 
//Seed Data
var homeBreakData = [
    {
        type: "breakfast",
        name: "eggs",
        image: "https://images.unsplash.com/photo-1527022128838-598670670723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        type: "breakfast",
        name: "waffles",
        image: "https://images.unsplash.com/photo-1512056068661-14ef8b6bfabe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
        type: "breakfast",
        name: "Steak",
        image: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
];

function seedHomeBreak(){
   //Remove all meals
   HomeBreakfast.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all meals!");
             //add a few campgrounds
            homeBreakData.forEach(function(seed){
                HomeBreakfast.create(seed, function(err, meal){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a meal");
                        meal.save();
                    }        
            });
        });
    }); 
}

module.exports = seedHomeBreak;