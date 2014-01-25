
var through2 = require('through2');

module.exports.setHeader = function streamSetHeader(k, v){
	if(!out) out=process.stdout;
	function setHeader(file, enc, next) {
		var http = file.stat && file.stat.http;
		if(!http || !http.res){
			this.emit('error', 'Object does not have an associated HTTP request to write to (use gulp_http_server.src)');
		}
		http.res.setHeader(k, v);
		this.push(file);
		next();
	}
	return through2.obj(printLog);
}
