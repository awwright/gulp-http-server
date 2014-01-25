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

### httpserver.src(httpd, webroot, namespace)

Serve files out of `webroot` whenever `namespace` is asked for. Typically `namespace` should be `/`, but may also be an absolute URI like `http://example.com/`.

`webroot` must have a trailing `/`.

### httpserver.dest()

Writes the formatted file to the HTTP response, which was stored in the `stats.http` object during the `httpserver.src` call (so no arguments are needed).

This passes through the file object unmodified, so you may read from `stats.http.req` and `stats.http.res` to do logging or other operations.
