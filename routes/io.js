var io = require('socket.io')();

io.on('connection', function(_socket) {
  var now = new Date();
  var connectionTime = new Date().toJSON();

  var remoteAddress = _socket.request.connection.remoteAddress;
  var remotePort = _socket.request.connection.remotePort;

  console.log('['+ connectionTime + ']' + 'Connection detected from ' + remoteAddress + ':' + remotePort + ' with id ' + _socket.id + '.');
  _socket.on('disconnect', function() {
    var now = new Date();
    var disconnectTime = new Date().toJSON();
    console.log('['+ disconnectTime + ']' + 'Disconnection of id ' + _socket.id + ' from address ' + remoteAddress + ':' + remotePort + '.');
  });
});

module.exports = io;