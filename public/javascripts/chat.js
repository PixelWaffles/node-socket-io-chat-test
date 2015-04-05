// Script Dependencies:
// jQuery
// socket.io

$(document).ready(function($) {

  var $messageForm = $('#send-message')
    , $usernameBox = $('#username-box')
    , $messageBox = $('#message-box')
    , $messageDisplay = $('#message-display')
    ;

  $messageForm.submit(function(_event) {
    _event.preventDefault();

    if( $usernameBox.val() === '') {
      socket.emit('send_message', '<b>' + 'anonymous' + ': ' + '</b>' + $messageBox.val());
    } else {
      socket.emit('send_message', '<b>' + $usernameBox.val() + ': ' + '</b>' + $messageBox.val());
    }
    
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
