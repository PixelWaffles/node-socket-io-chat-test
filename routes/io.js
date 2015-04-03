var io = require('socket.io')();

io.on('connection', function(socket) {
  var now = new Date();
  var connectionTime = new Date().toJSON();

  var remoteAddress = socket.request.connection.remoteAddress;
  var remotePort = socket.request.connection.remotePort;

  console.log('['+ connectionTime + ']' + 'Connection detected from ' + remoteAddress + ':' + remotePort + ' with id ' + socket.id + '.');
  socket.on('disconnect', function() {
    var now = new Date();
    var disconnectTime = new Date().toJSON();
    console.log('['+ disconnectTime + ']' + 'Disconnection of id ' + socket.id + ' from address ' + remoteAddress + ':' + remotePort + '.');
  });
});

module.exports = io;