var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    // passport = require("passport"),
    methodOverride = require('method-override'),
    // localStrategy = require("passport-local"),
    // User = require("./models/user"),
    // seedHomeBreak = require("./seeds"),
    // seedHomeLunch = require("./seeds1"),
    HomeBreakfast = require("./models/homeBreakModel"),
    HomeLunch = require("./models/homeLunchModel"),
    HomeDinner = require("./models/homeDinnerModel"),
    RestBreakfast = require("./models/restBreakModel"),
    RestLunch = require("./models/restLunchModel"),
    RestDinner = require("./models/restDinnerModel"),
    flash = require("connect-flash");

//mongoose.connect('mongodb://localhost:27017/meal_plan', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://degookin:J@cobe11@cluster0-psyky.mongodb.net/mealplanner?retryWrites=true', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//SEEDS
// seedHomeBreak();
// seedHomeLunch();


//root route
app.get("/", function(req, res){
    res.render("landing");
});

//INDEX
app.get("/views/meals/homeB/breakIndex", function(req, res){
    HomeBreakfast.find({}, function(err, meals){
      if(err){
          console.log(err);
      } else {
        //first thing in obj is any name, second is the data we want to pass in
        res.render("meals/homeB/breakIndex",{meals:meals});
      }
    });
});
app.get("/views/meals/homeL/lunchIndex", function(req, res){
    HomeLunch.find({}, function(err, meals){
      if(err){
          console.log(err);
      } else {
        res.render("meals/homeL/lunchIndex",{meals:meals});
      }
    });
});
app.get("/views/meals/homeD/dinnerIndex", function(req, res){
    HomeDinner.find({}, function(err, meals){
      if(err){
          console.log(err);
      } else {
        res.render("meals/homeD/dinnerIndex",{meals:meals});
      }
    });
});
app.get("/views/meals/restB/breakIndex", function(req, res){
    RestBreakfast.find({}, function(err, meals){
      if(err){
          console.log(err);
      } else {
        res.render("meals/restB/breakIndex",{meals:meals});
      }
    });
});
app.get("/views/meals/restL/lunchIndex", function(req, res){
    RestLunch.find({}, function(err, meals){
      if(err){
          console.log(err);
      } else {
        res.render("meals/restL/lunchIndex",{meals:meals});
      }
    });
});
app.get("/views/meals/restD/dinnerIndex", function(req, res){
    RestDinner.find({}, function(err, meals){
      if(err){
          console.log(err);
      } else {
        res.render("meals/restD/dinnerIndex",{meals:meals});
      }
    });
});



//CREATE - add new meal to DB
app.post("/meals/homeB/breakIndex", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var type = req.body.type;
    var newHomeMeal = {name: name, image: image, type: type};
    HomeBreakfast.create(newHomeMeal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/views/meals/homeB/breakIndex");
        }
    });
});
app.post("/meals/homeL/lunchIndex", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var type = req.body.type;
    var newHomeMeal = {name: name, image: image, type: type};
    HomeLunch.create(newHomeMeal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/views/meals/homeL/lunchIndex");
        }
    });
});
app.post("/meals/homeD/dinnerIndex", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var type = req.body.type;
    var newHomeMeal = {name: name, image: image, type: type};
    HomeDinner.create(newHomeMeal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/views/meals/homeD/dinnerIndex");
        }
    });
});
app.post("/meals/restB/breakIndex", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var type = req.body.type;
    var category = req.body.category;
    var price = req.body.price;
    var rating = req.body.rating;
    var newHomeMeal = {name: name, image: image, type: type, category: category, price: price, rating: rating};
    RestBreakfast.create(newHomeMeal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/views/meals/restB/breakIndex");
        }
    });
});
app.post("/meals/restL/lunchIndex", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var type = req.body.type;
    var category = req.body.category;
    var price = req.body.price;
    var rating = req.body.rating;
    var newHomeMeal = {name: name, image: image, type: type, category: category, price: price, rating: rating};
    RestLunch.create(newHomeMeal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/views/meals/restL/lunchIndex");
        }
    });
});
app.post("/meals/restD/dinnerIndex", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var type = req.body.type;
    var category = req.body.category;
    var price = req.body.price;
    var rating = req.body.rating;
    var newHomeMeal = {name: name, image: image, type: type, category: category, price: price, rating: rating};
    RestDinner.create(newHomeMeal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/views/meals/restD/dinnerIndex");
        }
    });
});



//NEW - show form to create new meal
app.get("/views/meals/homeB/breakNew", function(req, res){
   res.render("meals/homeB/breakNew"); 
});
app.get("/views/meals/homeL/lunchNew", function(req, res){
   res.render("meals/homeL/lunchNew"); 
});
app.get("/views/meals/homeD/dinnerNew", function(req, res){
   res.render("meals/homeD/dinnerNew"); 
});
app.get("/views/meals/restB/breakNew", function(req, res){
   res.render("meals/restB/breakNew"); 
});
app.get("/views/meals/restL/lunchNew", function(req, res){
   res.render("meals/restL/lunchNew"); 
});
app.get("/views/meals/restD/dinnerNew", function(req, res){
   res.render("meals/restD/dinnerNew"); 
});



//SHOW PAGE
app.get("/views/meals/homeB/:id", function(req, res){
    HomeBreakfast.findById(req.params.id).exec(function(err, foundMeal){
        if(err){
            console.log(err);
        } else {
            console.log(foundMeal);
            res.render("meals/homeB/breakShow", {meal: foundMeal});
        }
    });
});
app.get("/views/meals/homeL/:id", function(req, res){
    HomeLunch.findById(req.params.id).exec(function(err, foundMeal){
        if(err){
            console.log(err);
        } else {
            console.log(foundMeal);

            res.render("meals/homeL/lunchShow", {meal: foundMeal});
        }
    });
});
app.get("/views/meals/homeD/:id", function(req, res){
    HomeDinner.findById(req.params.id).exec(function(err, foundMeal){
        if(err){
            console.log(err);
        } else {
            console.log(foundMeal);
            res.render("meals/homeD/dinnerShow", {meal: foundMeal});
        }
    });
});
app.get("/views/meals/restB/:id", function(req, res){
    RestBreakfast.findById(req.params.id).exec(function(err, foundMeal){
        if(err){
            console.log(err);
        } else {
            console.log(foundMeal);
            res.render("meals/restB/breakShow", {meal: foundMeal});
        }
    });
});
app.get("/views/meals/restL/:id", function(req, res){
    RestLunch.findById(req.params.id).exec(function(err, foundMeal){
        if(err){
            console.log(err);
        } else {
            console.log(foundMeal);
            res.render("meals/restL/lunchShow", {meal: foundMeal});
        }
    });
});
app.get("/views/meals/restD/:id", function(req, res){
    RestDinner.findById(req.params.id).exec(function(err, foundMeal){
        if(err){
            console.log(err);
        } else {
            console.log(foundMeal);
            res.render("meals/restD/dinnerShow", {meal: foundMeal});
        }
    });
});




//EDIT MEALS
app.get("/views/meals/homeB/:id/breakEdit", function(req, res) {
        HomeBreakfast.findById(req.params.id, function(err, foundMeal){
            res.render("meals/homeB/breakEdit", {meal: foundMeal});
        });
    });
app.get("/views/meals/homeL/:id/lunchEdit", function(req, res) {
        HomeLunch.findById(req.params.id, function(err, foundMeal){
            res.render("meals/homeL/lunchEdit", {meal: foundMeal});
        });
    });
app.get("/views/meals/homeD/:id/dinnerEdit", function(req, res) {
    HomeDinner.findById(req.params.id, function(err, foundMeal){
        res.render("meals/homeD/dinnerEdit", {meal: foundMeal});
        });
    });
app.get("/views/meals/restB/:id/breakEdit", function(req, res) {
        RestBreakfast.findById(req.params.id, function(err, foundMeal){
            res.render("meals/restB/breakEdit", {meal: foundMeal});
        });
    });
app.get("/views/meals/restL/:id/lunchEdit", function(req, res) {
        RestLunch.findById(req.params.id, function(err, foundMeal){
            res.render("meals/restL/lunchEdit", {meal: foundMeal});
        });
    });
app.get("/views/meals/restD/:id/dinnerEdit", function(req, res) {
    RestDinner.findById(req.params.id, function(err, foundMeal){
        res.render("meals/restD/dinnerEdit", {meal: foundMeal});
        });
    });



//UPDATE MEALS ROUTE
app.put("/views/meals/homeB/:id", function(req, res){
    //find and update correct meal
    HomeBreakfast.findByIdAndUpdate(req.params.id, req.body.meal, function(err, updatedMeal){
        if(err) {
            res.redirect("/views/meals/homeB/breakIndex");
        } else {
            res.redirect("/views/meals/homeB/" + req.params.id);
        }
    });
});
app.put("/views/meals/homeL/:id", function(req, res){
    //find and update correct meal
    HomeLunch.findByIdAndUpdate(req.params.id, req.body.meal, function(err, updatedMeal){
        if(err) {
            res.redirect("/views/meals/homeL/lunchIndex");
        } else {
            res.redirect("/views/meals/homeL/" + req.params.id);
        }
    });
});
app.put("/views/meals/homeD/:id", function(req, res){
    //find and update correct meal
    HomeDinner.findByIdAndUpdate(req.params.id, req.body.meal, function(err, updatedMeal){
        if(err) {
            res.redirect("/views/meals/homeD/dinnerIndex");
        } else {
            res.redirect("/views/meals/homeD/" + req.params.id);
        }
    });
});
app.put("/views/meals/restB/:id", function(req, res){
    //find and update correct meal
    RestBreakfast.findByIdAndUpdate(req.params.id, req.body.meal, function(err, updatedMeal){
        if(err) {
            res.redirect("/views/meals/restB/breakIndex");
        } else {
            res.redirect("/views/meals/restB/" + req.params.id);
        }
    });
});
app.put("/views/meals/restL/:id", function(req, res){
    //find and update correct meal
    RestLunch.findByIdAndUpdate(req.params.id, req.body.meal, function(err, updatedMeal){
        if(err) {
            res.redirect("/views/meals/restL/lunchIndex");
        } else {
            res.redirect("/views/meals/restL/" + req.params.id);
        }
    });
});
app.put("/views/meals/restD/:id", function(req, res){
    //find and update correct meal
    RestDinner.findByIdAndUpdate(req.params.id, req.body.meal, function(err, updatedMeal){
        if(err) {
            res.redirect("/views/meals/restD/dinnerIndex");
        } else {
            res.redirect("/views/meals/restD/" + req.params.id);
        }
    });
});




//DESTROY MEALS ROUTE
app.delete("/views/meals/homeB/:id", function(req, res){
  HomeBreakfast.findByIdAndRemove(req.params.id, function(err){
      if(err) {
          res.redirect("/views/meals/homeB/breakIndex");
      } else {
          res.redirect("/views/meals/homeB/breakIndex");
      }
  });
});
app.delete("/views/meals/homeL/:id", function(req, res){
  HomeLunch.findByIdAndRemove(req.params.id, function(err){
      if(err) {
          res.redirect("/views/meals/homeL/lunchIndex");
      } else {
          res.redirect("/views/meals/homeL/lunchIndex");
      }
  });
});
app.delete("/views/meals/homeD/:id", function(req, res){
  HomeDinner.findByIdAndRemove(req.params.id, function(err){
      if(err) {
          res.redirect("/views/meals/homeD/dinnerIndex");
      } else {
          res.redirect("/views/meals/homeD/dinnerIndex");
      }
  });
});
app.delete("/views/meals/restB/:id", function(req, res){
  RestBreakfast.findByIdAndRemove(req.params.id, function(err){
      if(err) {
          res.redirect("/views/meals/restB/breakIndex");
      } else {
          res.redirect("/views/meals/restB/breakIndex");
      }
  });
});
app.delete("/views/meals/restL/:id", function(req, res){
  RestLunch.findByIdAndRemove(req.params.id, function(err){
      if(err) {
          res.redirect("/views/meals/restL/lunchIndex");
      } else {
          res.redirect("/views/meals/restL/lunchIndex");
      }
  });
});
app.delete("/views/meals/restD/:id", function(req, res){
  RestDinner.findByIdAndRemove(req.params.id, function(err){
      if(err) {
          res.redirect("/views/meals/restD/dinnerIndex");
      } else {
          res.redirect("/views/meals/restD/dinnerIndex");
      }
  });
});




    app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Planning Some Meals...");
});