
var through2 = require('through2');

module.exports.log = function log(out){
	if(!out) out=process.stdout;
	function printLog(file, enc, next) {
		var http = file.stat && file.stat.http;
		if(!http || !http.res){
			this.emit('error', 'Object does not have an associated HTTP request to write to (use vinyl_http.src)');
		}
		http.res.on('finish', function(){
			var line = '';
			line += http.req.connection.remoteAddress+' - - ';
			line += '['+(new Date().toISOString())+'] ';
			line += '"'+http.req.method+' '+http.req.url+' HTTP/'+http.req.httpVersion+'" ';
			line += http.res.statusCode+' '+(http.res.getHeader('Content-Length')||'-')+'\n';
			out.write(line);
		});
		this.push(file);
		next();
	}
	return through2.obj(printLog);
}
