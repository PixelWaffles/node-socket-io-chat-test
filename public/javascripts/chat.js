// Script Dependencies:
// jQuery
// socket.io

$(document).ready(function($) {

  var $messageForm = $('#send-message')
    , $messageBox = $('#message-box')
    , $chatApp = $('#chat-app')
    ;

  $messageForm.submit(function(_event) {
    _event.preventDefault();
    socket.emit('send_message', $messageBox.val());
    $messageBox.val('');
  });
});
