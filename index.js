var express = require('express');
var timecheck = require('./app/timecheck')
var app = express();
var port = process.env.port || 3000, hostname = 'localhost';



timecheck(app)

app.listen(port, hostname, function(){
	console.log("Server running at http://" + hostname + ":" + port)
})