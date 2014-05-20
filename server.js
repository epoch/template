var port = process.env.PORT || 3001;
var express = require('express');
var lessMiddleware = require('less-middleware');
var path = require('path');
var game = require('./app/app');

var app = express();
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(port, function() {
  console.log('Magic happens on port %d', port);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  console.log('client connected');
});

