
var server = require('http').createServer();
server.listen(8080);

var gulphttpd = require('./');

gulphttpd.src(server, __dirname+'/', '/')
	.pipe(require('gulp-markdown')())
	.pipe(gulphttpd.dest());
