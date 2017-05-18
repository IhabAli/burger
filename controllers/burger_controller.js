var burgers = require('../models/burgers.js');


module.exports = function(app) {
	
	// homeroute for our application. Gets all burgers from database.
	app.get('/', function(req,res) {
		res.redirect('/burgers')
	});

	app.get('/burgers', function(req,res) {
		burgers.all(function(data){
			var hbsObject = {burgers : data};
			console.log(hbsObject);
			res.render('index', hbsObject);
		});
	});

	// TODO: Add routes for POST, PUT, DELETE



};