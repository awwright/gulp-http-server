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
