// Script Dependencies:
// jQuery
// socket.io

$(document).ready(function($) {

  var $messageForm = $('#send-message')
    , $messageBox = $('#message-box')
    , $messageDisplay = $('#message-display')
    ;

  $messageForm.submit(function(_event) {
    _event.preventDefault();
    socket.emit('send_message', $messageBox.val());
    $messageBox.val('');
  });

  socket.on('new_message', function(_data) {
    $messageDisplay.append(_data + '<br/>');
  });
});
