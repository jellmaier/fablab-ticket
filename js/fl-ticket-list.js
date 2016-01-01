jQuery(document).ready(function($){

  
  var max_time = '';
  var time_interval = '';
  var ticket_caption = '';
  var device_caption = '';
  var time_system_caption = '';
  var time_ticket_caption = '';
  var instruction_request_caption = '';
  data = {
    action: 'get_fablab_options'
  };
  $.post(ajaxurl, data, function(response) {
    var options = JSON.parse(response);
    max_time = parseInt(options.ticket_max_time);
    time_interval = parseInt(options.ticket_time_interval);
  })
  data = {
    action: 'get_fablab_captions'
  };
  $.post(ajaxurl, data, function(response) {
    var options = JSON.parse(response);
    ticket_system_caption = options.ticket_system_caption;
    ticket_caption = options.ticket_caption;
    device_caption = options.device_caption;
    time_ticket_caption = options.time_ticket_caption;
    instruction_request_caption = options.instruction_request_caption;
  })

  var orig_overflow = $( 'body' ).css( 'overflow' );

  // busy indicator handler
  $(".busy").bind("ajaxSend", function() {
    $(this).fadeIn(200);
  }).bind("ajaxStop", function() {
    $(this).fadeOut(200);
  }).bind("ajaxError", function() {
    $(this).fadeOut(200);
  });


  //enable ticketing
  $('#enable-ticketing').on('click', function(){
    data = {
      action: 'activate_ticketing',
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        message_success($, ticket_system_caption + " aktiviert!", true);
      }
    })
  })

  //enable ticketing
  $('#disable-ticketing').on('click', function(){
    data = {
      action: 'deactivate_ticketing',
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        message_success($, ticket_system_caption + " deaktiviert!", true);
      }
    })
  })

  $('.draft-toggle').click(function(event) {
    $('#draft-ticket-listing').slideToggle(200);
  })

  $('.time-ticket-toggle').click(function(event) {
    $('#time-ticket-listing').slideToggle(200);
  })

  // Time-Ticket stop
  $('.stop-time-ticket').on('click', function(event) {
    //Get Ticket option
    var time_ticket = $(this).parent('div');
    data = {
      action: 'stop_timeticket',
      ticket_id:  time_ticket.data('time-ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response) {
        message_success($, time_ticket_caption + " von: " + time_ticket.data('user') + ", beendet!", true);
        time_ticket.hide();
      } else {
        message_error($, time_ticket_caption + " konnte nicht gestoppt werden!");
      }
    })
  })

  // Time-Ticket delete
  $('.delete-time-ticket').on('click', function(event) {
    //Get Ticket option
    var time_ticket = $(this).parent('div');
    data = {
      action: 'delete_timeticket',
      ticket_id:  time_ticket.data('time-ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response) {
        message_success($, time_ticket_caption + " von: " + time_ticket.data('user') + ", gelöscht!", true);
        time_ticket.hide();
      } else {
        message_error($, time_ticket_caption + " konnte nicht gelöscht werden!");
      }
    })
  })

  // Time-Ticket extend
  $('.extend-time-ticket').on('click', function(event) {
    //Get Ticket option
    var time_ticket = $(this).parent('div');
    data = {
      action: 'extend_timeticket',
      ticket_id:  time_ticket.data('time-ticket-id'),
      minutes: $(this).data('minutes'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response) {
        message_success($, time_ticket_caption + " von: " + time_ticket.data('user') + ", verlängert!", true);
        $('#time-ticket-listing').slideToggle(200);
      } else {
        message_error($, time_ticket_caption + " konnte nicht verlängert werden!");
      }
    })
  })


  // Ticket Handling 
  $('.deactivate-ticket').on('click', function(event) {
    ticket = $(this).parent('div');
    data = {
      action: 'deactivate_ticket',
      ticket_id:  ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        message_success($, ticket_caption + " von: " + ticket.data('user') + ", deaktiviert!", true);
      } else {
        message_error($, ticket_caption + " konnte nicht deaktiviert werden!");
      }
      ticket.hide();
    })
  })

  $('.activate-ticket').on('click', function(event) {
    ticket = $(this).parent('div');
    data = {
      action: 'activate_ticket',
      ticket_id:  ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        message_success($, ticket_caption + " von: " + ticket.data('user') + ", aktiviert!", true);
      } else {
        message_error($, ticket_caption + " konnte nicht aktiviert werden!");
      }
      ticket.hide();
    })
  })

  $('.delete-ticket').on('click', function(event) {
    ticket = $(this).parent('div');
    data = {
      action: 'delete_ticket',
      ticket_id:  ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        message_success($, ticket_caption + " von: " + ticket.data('user') + ", gelöscht!", true);
      } else {
        message_error($, ticket_caption + " konnte nicht gelöscht werden!");
      } 
      ticket.hide();
    })
  })

  // on click get device ticket
  // load overlay content
  $('.assign-ticket').on('click', function(event) {
    //Get Ticket option
    ticket = $(this).parent('div');

    // Set User Name
    $('#user-name').replaceWith('<p id="user-name" >User: <b>' + ticket.data('user') + '</b></p>');
    $('#device-name').replaceWith('<p id="device-name" >' + device_caption + ': <b>' + ticket.data('device-name') + '</b></p>');

    //Eddit Time Options
    $("#time-select").empty();
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#time-select").append( new Option(minutesToHours(max_time), max_time) );
    $("#time-select").val(ticket.data('duration'));

    $('body').css( 'overflow', 'hidden' );
    $("#device-ticket-box").show();
    $("#overlay").show();
    $("#overlay-background").fadeIn(600);
  })


  // on click submit ticket
  $('#submit-ticket').on('click', function(){

    data = {
      action: 'add_timeticket',
      device_id:  ticket.data('device-id'),
      duration:  $("#time-select").val(),
      user_id:  ticket.data('user-id'),
      ticket_id:  ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      ticket.hide();
      close_overlay($, orig_overflow);
      message_success($, time_ticket_caption + " für das " + device_caption + ": " + ticket.data('device-name') + ", erfolgreich erstellt!", true);
    })
  })

  $('.set-permission').on('click', function(event) {
    //Get Ticket option
    ticket = $(this).parent('div');
    data = {
      action: 'set_user_device_permission',
      user_id: ticket.data('user-id'),
      device_id:  ticket.data('device-id'),
      set_permission: true
    };
    $.post(ajaxurl, data, function(response) {
      data = {
        action: 'delete_ticket',
        ticket_id: ticket.data('ticket-id'),
      };
      $.post(ajaxurl, data, function(response) {
        if(response){
          ticket.fadeOut(200);
          message_success($, "Berechtigung an " +
            ticket.data('user') + ", für das " + device_caption + ": " + ticket.data('device-name') + ", erteilt!", false);
        } 
      })
      
    })    
  })

  $('.delete-permission').on('click', function(event) {
    //Get Ticket option
    ticket = $(this).parent('div');
    data = {
      action: 'delete_ticket',
      ticket_id: ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        ticket.fadeOut(200);
        message_success($, instruction_request_caption + " von " +
            ticket.data('user') + " gelöscht!");
      } 
    })
  })


  // on click cancle ticket
  $('.cancel-overlay').on('click', function(){
    close_overlay($, orig_overflow);
  })
  $('.close').on('click', function() {
    close_overlay($, orig_overflow);
  })
  $('.fl-overlay-layer').on('click', function() {
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
  $(".fl-overlay").hide();
  $("#overlay-background").fadeOut(600);
}

// display message
// if message set, display message and reload
function message_success($, message, reload){
  $('#message-container').append('<div class="message-box success"><p>' + message + '</p></div>');
  if(reload){
    setTimeout(reloadPage, 1000);
  }
}

// display message
// if message set, display message and reload
function message_error($, message){
  $('#message-container').append('<div class="message-box error"><p>' + message + '</p></div>');
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