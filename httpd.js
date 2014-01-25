#!/usr/bin/env node

var gulphttpd = require('./');

var listenPort = 8080;

var server = require('http').createServer();
server.listen(listenPort);

gulphttpd.src(server, __dirname+'/', '/')
	.pipe(gulphttpd.log(process.stdout))
	.pipe(require('gulp-markdown')())
	.pipe(gulphttpd.onRequest(function(file, req, res, next){
		if(file.path.match(/\.html$/)){
			res.setHeader('Content-Type', 'text/html');
		}else{
			res.setHeader('Content-Type', 'text/plain');
		}
		next();
	})).pipe(gulphttpd.dest());

console.log('Listening on port '+listenPort);
console.log('Now try loading <http://localhost:'+listenPort+'/README.md>');
