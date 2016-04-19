var fs = require('fs')

module.exports = function (app){
	app.get('/', function(req, res){
		console.log("Received request for: index")
		res.type('text/html')
		fs.readFile('./public/index.html', function(err, data){
			if (err) throw err;
			res.send(data)
		})
	})	
	app.get('/:timeStamp', function(req, res){
		var input = req.params.timeStamp
		if (Number(input)){
			res.type('application/json')
			var unixInput = new Date(input*1000)
			console.log("Received request for: " + unixInput)
			if (unixInput != "Invalid Date"){
				res.send(JSON.stringify({ "unix": input, "natural": unixInput.toUTCString()}))
			} else {
				res.send(JSON.stringify({ "unix": null, "natural": null}))
			}
		} else {
			res.type('application/json')
			var naturalInput = new Date(input)
			console.log("Received request for: " + naturalInput)
			if (naturalInput != "Invalid Date"){
				res.send(JSON.stringify({ "unix": Number(Date.parse(naturalInput))/1000, "natural": naturalInput.toUTCString()}))
			} else {
				res.send(JSON.stringify({ "unix": null, "natural": null}))
			}
		}
	})	
}