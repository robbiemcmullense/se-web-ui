var express = require('express');
var serveStatic = require('serve-static');

var app = express();

const PORT= 3000;

app.use('/se', express.static(__dirname + '/node_modules/@se/'));
app.use('/src', express.static(__dirname + '/src/'));
app.use(serveStatic('public', { 'index': ['index.html', 'index.htm'] }));
app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);
