# gulp-http-server

A library for serving HTTP requests through a Gulp pipeline

Format Markdown files on your filesystem to HTML!

Format JSON into HTML!

Format HTML into PDFs!

DO ANYTHING!

## Example

See httpd.js for an example server:

	$ node httpd.js

## Usage

	var gulphttpd = require('gulp-http-server');

### gulphttpd.src(httpd, webroot, namespace)

Serve files out of `webroot` whenever `namespace` is asked for. Typically `namespace` should be `/`, but may also be an absolute URI like `http://example.com/`.

`webroot` must have a trailing `/`.


### gulphttpd.log([outstream])

Logs the request to outstream in the Common Log Format when the response is written. Defaults to stdout if not provided.


### gulphttpd.setHeader(name, value)

Calls response.setHeader on every HTTP request going through. Useful for setting the Content-Type, Server, or similar headers.


### gulphttpd.dest()

Writes the formatted file to the HTTP response, which was stored in the `stats.http` object during the `gulphttpd.src` call (so no arguments are needed).

This passes through the file object unmodified, so you may read from `stats.http.req` and `stats.http.res` to do logging or other operations.
