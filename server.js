// Dependencies
var express = require("express");
var exhbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// setting the port variable
var PORT = process.env.PORT || 3000;

// craeting new express
var app = express();

// setting up express handlebars
app.engine("handlebars", exhbs({ defaultLayout: 'main'}));
app.set("view engine", "handlebars");

// setting up method override middleware
app.use(methodOverride("_method"));

// setting up bodeParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// require burger routes
require("./controllers/burger_controller")(app);

// Listening on PORT 3000
app.listen(PORT, function(){
	console.log('server running on PORT 3000');
});
