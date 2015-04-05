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
    var isAtBottom = $messageDisplay[0].scrollHeight - $messageDisplay.scrollTop() == $messageDisplay.height();
    var hasVerticalScroll = $messageDisplay[0].scrollHeight > $messageDisplay.height();

    $messageDisplay.append(_data + '<br/>');
    if(isAtBottom || !hasVerticalScroll) {
      $messageDisplay.scrollTop($messageDisplay[0].scrollHeight);
    }
  });
});
