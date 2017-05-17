var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	burger.all(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});




module.exports = function(app) {
	
	// homeroute for our application. Gets all burgers from database.
	app.get("/", function(req, res){

		// TODO: grab all the burgers from the data base
		// TODO: pass in burgers to handelbars template
		res.render("index", {title: "GettingBy"});

	});

	// TODO: Add routes for POST, PUT, DELETE



};