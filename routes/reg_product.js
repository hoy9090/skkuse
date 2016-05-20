
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
	pool.getConnection(function(err, conn) {
		if (err)
			console.error(err);
		conn.query('use board');
		conn.query('select * from community', function(err, result, field) {
			if (err) {
				console.error(err); 
			}
			console.log(err, result, field);
			conn.release();
			res.render('index', {data: result});
		});
	});
});

module.exports = router;
