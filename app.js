const express = require('express'),
	http = require('http')
	url = require('url')
	path = require('path')
	// Creates app from the library
	app = express (),

	app.set('views', __dirname+'/public')
	app.use('/', express.static(path.join(
		__dirname+"/public")))
	// Serves static files
	.use('/static', express.static(__dirname+"/static"))

	.get('/', (req, res) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
		res.render('index')
	})


http.createServer(app).listen(process.env.PORT || 8181)