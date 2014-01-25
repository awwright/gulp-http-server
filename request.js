
var through2 = require('through2');

module.exports.onRequest = function streamOnRequest(ev){
	function onRequest(file, enc, next) {
		var self = this;
		var http = file.stat && file.stat.http;
		if(!http || !http.res){
			this.emit('error', 'Object does not have an associated HTTP request to write to (use gulp_http_server.src)');
		}
		ev(file, http.req, http.res, function(err){
			if(err){
				self.emit('error', err);
			}else{
				self.push(file);
			}
			next();
		});
	}
	return through2.obj(onRequest);
}
