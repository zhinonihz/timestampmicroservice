var express = require('express');
var timecheck = require('./app/timecheck'), os = require('os');
var app = express();
var port = process.env.port || 3000, hostname = 'localhost';


app.use(express.static(__dirname + '/public'))
timecheck(app)

app.listen(port, function(){
	console.log("Server running at http://" + os.hostname() + ":" + port)
})