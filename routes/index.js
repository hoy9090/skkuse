var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '1234'
});

/* GET home page. */
router.get('/', function(req, res, next) {
	pool.getConnection(function(conn, err) {
		if (err)
			console.error(err);
		conn.query('use skkuse');
		conn.query('select * from community', function(err, result, field) {
			if (err) {
				console.error(err); 
			}
			console.log(err, result, field);
			conn.release();
			res.render('index');
		});
	});
});

module.exports = router;
