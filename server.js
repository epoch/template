var port = process.env.PORT || 3001;
var express = require('express');
var path = require('path');
var game = require('./app/app');

var app = express();
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(port, function() {
  console.log('Magic happens on port ' + port);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  console.log('client connected');
});

