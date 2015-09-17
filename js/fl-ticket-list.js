jQuery(document).ready(function($){
  var max_time = 120;
  var time_interval = 15;
  var orig_overflow = $( 'body' ).css( 'overflow' );
  var user_name = ''
  var user_id = '';
  var device_id = '';
  var ticket = '';

  // on click get device ticket
  // load overlay content
  $('#ticket-listing').on('click', function(event) {

    //Get Device ID
    ticket = $( event.target ).closest( 'a' );
    ticket_id = ticket.data('name');
    device_id = ticket.find('#ticket-device-id').val();
    duration = ticket.find('#ticket-duration').val();
    user_name = ticket.find('#ticket-user').val();
    user_id = ticket.find('#ticket-user-id').val();

    // Set User Name
    $('#user-name').replaceWith('<p id="user-name" >User: <b>' + user_name + '</b></p>');

    //Eddit Time Options
    $("#time-select").empty();
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#time-select").append( new Option(minutesToHours(max_time), max_time) );
    $("#time-select").val(duration)

    // Set Device Name
    data = {
      action: 'get_device_title',
      device_id: device_id,
    };
    $.post(ajaxurl, data, function(response) {
      $('#device-name').replaceWith('<p id="device-name" >Gerät: <b>' + response + '</b></p>');
      $('body').css( 'overflow', 'hidden' );
      $("#device-ticket-box").show();
    })
    $("#overlay").fadeIn(600);


  })

  // on click submit ticket
  $('#submit-ticket').on('click', function(){
    var device_name = jQuery('#device-name').text();

    data = {
      action: 'add_timeticket',
      device_id:  device_id,
      duration:  duration,
      user_id:  user_id,
    };
    $.post(ajaxurl, data, function(response) {
      ticket.hide();
      close_overlay($, orig_overflow, "Time-Ticket für das " + device_name + ", erfolgreich erstellt!");
    })

    data = {
      action: 'deactivate_ticket',
      ticket_id:  ticket_id,
    };
    $.post(ajaxurl, data, function(response) {
    })

  })

  // on click cancle ticket
  $('#cancel-ticket').on('click', function(){
    close_overlay($, orig_overflow, '');
  })
  $('#overlay-close').on('click', function() {
    close_overlay($, orig_overflow, '');
  })
  $('#overlay-background').on('click', function() {
    close_overlay($, orig_overflow, '');
  })
  $(document).keyup(function(event){
    if (event.keyCode == 27) {
      close_overlay($, orig_overflow, '');
    }
  });

});

// closes overlay
// if message set, display message and reload
function close_overlay($, orig_overflow, message){
    $('body').css( 'overflow', orig_overflow );    
    $("#device-ticket-box").hide();
    $("#overlay").fadeOut(600);
    if(message != '') {
      $('#message').text(message);
      $('#message').show();
    }
  }

function minutesToHours(time){
  var ret = "";
  var hours = Math.floor(time / 60);
  var minutes = time % 60;
  hours > 0 ? (ret = hours + " Stunde") : ('');
  hours > 1 ? (ret += "n") : ('') ;
  hours > 0 && minutes > 0 ? (ret += ", ") : ('') ;
  minutes > 0 ? (ret += minutes + " Minute") : ('');
  minutes > 1 ? (ret += "n") : ('') ;
  return ret;
}