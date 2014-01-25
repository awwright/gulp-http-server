#!/usr/bin/env node

var gulphttpd = require('./');

var listenPort = 8080;

var server = require('http').createServer();
server.listen(listenPort);

gulphttpd.src(server, __dirname+'/', '/')
	.pipe(gulphttpd.log(process.stdout))
	.pipe(require('gulp-markdown')())
	.pipe(gulphttpd.dest());

console.log('Listening on port '+listenPort);
console.log('Now try loading <http://localhost:'+listenPort+'/README.md>');
