
var through2 = require('through2');

module.exports.dest = httpdDest;

function httpdDest(){
	function writeResponse(file, enc, next) {
		var http = file.stat && file.stat.http;
		if(!http || !http.res){
			this.emit('error', 'Object does not have an associated HTTP request to write to (use vinyl_http.src)');
		}
		if(file.isStream()){
			file.pipe(http.res);
		}
		if(file.isBuffer()){
			http.res.end(file.contents);
		}
		// Pass the file through untouched for whatever people might want to use it for I guess
		this.push(file);
		next();
	}
	return through2.obj(writeResponse);
}
