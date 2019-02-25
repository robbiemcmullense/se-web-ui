var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use('/se', express.static(__dirname + '/node_modules/@se/'));
app.use('/src', express.static(__dirname + '/src/'));
app.use(serveStatic('public', { 'index': ['index.html', 'index.htm'] }));
app.listen(3000);