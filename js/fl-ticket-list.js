jQuery(document).ready(function($){
  var max_time = 120;
  var time_interval = 15;
  var orig_overflow = $( 'body' ).css( 'overflow' );

  $('.draft-toggle').click(function(event) {
    $('#draft-ticket-listing').slideToggle(200);
  })

  $('.time-ticket-toggle').click(function(event) {
    $('#time-ticket-listing').slideToggle(200);
  })

  // Time-Ticket Handling
  $('.stop-time-ticket').on('click', function(event) {
    //Get Ticket option
    var time_ticket = $(this).parent('div');
    data = {
      action: 'stop_timeticket',
      ticket_id:  time_ticket.data('time-ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
       message($, "Time-Ticket von: " + time_ticket.data('user') + ", beendet!");
    })
  })

  // Time-Ticket Handling
  $('.delete-time-ticket').on('click', function(event) {
    //Get Ticket option
    var time_ticket = $(this).parent('div');
    data = {
      action: 'delete_timeticket',
      ticket_id:  time_ticket.data('time-ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
       message($, "Time-Ticket von: " + time_ticket.data('user') + ", gelöscht!");
    })
  })


  // Ticket Handling 
  $('.deactivate-ticket').on('click', function(event) {
    //Get Ticket option
    ticket = $(this).parent('div');
    data = {
      action: 'deactivate_ticket',
      ticket_id:  ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
       message($, "Ticket von: " + ticket.data('user') + ", deaktiviert!");
    })
  })

  $('.activate-ticket').on('click', function(event) {
    //Get Ticket option
    ticket = $(this).parent('div');
    data = {
      action: 'activate_ticket',
      ticket_id:  ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
       message($, "Ticket von: " + ticket.data('user') + ", aktiviert!");
    })
  })

  // on click get device ticket
  // load overlay content
  $('.assign-ticket').on('click', function(event) {
    //Get Ticket option
    ticket = $(this).parent('div');

    // Set User Name
    $('#user-name').replaceWith('<p id="user-name" >User: <b>' + ticket.data('user') + '</b></p>');
    $('#device-name').replaceWith('<p id="device-name" >Gerät: <b>' + ticket.data('device-name') + '</b></p>');

    //Eddit Time Options
    $("#time-select").empty();
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#time-select").append( new Option(minutesToHours(max_time), max_time) );
    $("#time-select").val(ticket.data('duration'));

/*
    // Set Device Name
    data = {
      action: 'get_device_title',
      device_id: device_id,
    };
    $.post(ajaxurl, data, function(response) {
      $('#device-name').replaceWith('<p id="device-name" >Gerät: <b>' + response + '</b></p>');
      
    })
    */
    $('body').css( 'overflow', 'hidden' );
    $("#device-ticket-box").show();
    $("#overlay").fadeIn(600);
  })


  // on click submit ticket
  $('#submit-ticket').on('click', function(){

    data = {
      action: 'add_timeticket',
      device_id:  ticket.data('device-id'),
      duration:  ticket.data('duration'),
      user_id:  ticket.data('user-id'),
    };
    $.post(ajaxurl, data, function(response) {
      ticket.hide();
      close_overlay($, orig_overflow);
      message($, "Time-Ticket für das Gerät: " + ticket.data('device-name') + ", erfolgreich erstellt!")
    })

    data = {
      action: 'deactivate_ticket',
      ticket_id:  ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {})
  })

  // on click cancle ticket
  $('#cancel-ticket').on('click', function(){
    close_overlay($, orig_overflow);
  })
  $('#overlay-close').on('click', function() {
    close_overlay($, orig_overflow);
  })
  $('#overlay-background').on('click', function() {
    close_overlay($, orig_overflow);
  })
  $(document).keyup(function(event){
    if (event.keyCode == 27) {
      close_overlay($, orig_overflow);
    }
  });

});


function reloadPage(){
  location.reload();
}

// closes overlay
// if message set, display message and reload
function close_overlay($, orig_overflow){
  $('body').css( 'overflow', orig_overflow );    
  $("#device-ticket-box").hide();
  $("#overlay").fadeOut(600);
}

// closes overlay
// if message set, display message and reload
function message($, message){
  $('#message').text(message);
  $('#message').show();
  setTimeout(reloadPage, 1000);
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