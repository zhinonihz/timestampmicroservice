var express = require('express');
var timecheck = require('./app/timecheck');
var app = express();
var port = process.env.PORT || 3000, hostname = 'localhost';


timecheck(app)

app.listen(port, function(){
	console.log("Server running at port:" + port)
})