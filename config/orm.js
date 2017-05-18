var db = require('./connection');

module.exports = {
	selectAll: function(table, cb) {
		db.query('SELECT * FROM ' + table, function(error, results){
			if(error)
				console.log(error);
			else
				cb(results);
		});
	}
}

