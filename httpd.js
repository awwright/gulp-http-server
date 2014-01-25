
var server = require('http').createServer();
server.listen(8080);

require('./src').src(server, __dirname+'/doc/', '/')
	.pipe(require('gulp-markdown')())
	.pipe(require('./dest').dest());
