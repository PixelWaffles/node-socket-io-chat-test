// Script Dependencies:
// jQuery
// socket.io

$(document).ready(function($) {
  setInterval(function() {
    $('#subtitle').hide(300).fadeIn(9000);
  }, 9300);

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
