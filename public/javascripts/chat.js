// Script Dependencies:
// jQuery
// socket.io

$(document).ready(function($) {

  var $messageForm = $('#send_message')
    , $messageBox = $('#message_box')
    , $chatApp = $('#chat_app')
    ;

  $messageForm.submit(function(_event) {
    _event.preventDefault();
    socket.emit('send message', $messageBox.val());
    $messageBox.val('');
  });
});
