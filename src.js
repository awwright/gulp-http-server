
var path = require('path');
var url = require('url');
var fs = require('fs');

Error.stackTraceLimit=1000;

var through = require('through2');
var File = require('vinyl');

module.exports.src = httpdSrc;

function httpdSrc(httpd, webroot, namespace) {
	var requestStream = through({objectMode:true});

	httpd.on('request', function(req, res){
		var location = url.resolve('http://'+(req.headers.host||'localhost'), req.url);
		var parts = url.parse(location);
		if(parts.pathname.substring(0,3)==='/..'){
			res.statusCode = 400;
			res.setHeader('Content-Type', 'text/plain');
			res.end('Invalid URI');
			return;
		}
		var filename;
		if(namespace[0]==='/' && parts.pathname.substring(0,namespace.length)==namespace){
			filename = webroot + parts.pathname.substring(namespace.length);
		}else if(location.substring(namespace.length)===namespace){
			filename = webroot + location.substring(namespace.length);
		}
		var contents;
		try{
			contents = fs.readFileSync(filename);
		}catch(e){
		}
		if(!filename || contents===undefined){
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain');
			if(filename) res.write(filename+'\n');
			res.end('File Not Found');
			return;
		}
		var file = new File({
				cwd: webroot,
				base: path.basename(filename),
				location: location,
				path: filename, 
				contents: contents,
				stat: {http: {req:req, res:res}},
		});
		requestStream.push(file);
	});
	
	return requestStream;
}
