var orm = require('../config/orm.js');

module.exports = {
	all: function(cb) {
		orm.selectAll("burgers", function(data){
			cb(data);
		});
	}
};