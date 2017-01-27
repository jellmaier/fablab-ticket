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
    $.max_time = parseInt(options.ticket_max_time);
    $.time_interval = parseInt(options.ticket_time_interval);
    $.calc_time = (options.ticket_calcule_waiting_time == '1')? true : false;
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

  //reload handler

  setTimeout(show_reload_notification, 60000);

  function show_reload_notification(){
     $('.reload-layer').slideDown(300);
  }

  $('#reload-reload').click(function(event) {
     $('.reload-layer').slideUp(300);
     location.reload();
  })
  $('#reload-cancel').click(function(event) {
     $('.reload-layer').slideUp(300);
     setTimeout(show_reload_notification, 60000);
  })


  // menu handler
  $('.option-button').click(function(event) {
    window.location = '?' + this.id;
  })


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
    $(this).parent('div').find('.draft-ticket-listing').slideToggle(200);
  })

  $('.device-toggle').click(function(event) {
    $(this).parent('div').find('.device-dropdown').slideToggle(50);
  })
  $('.device-close').click(function(event) {
    $(this).parent('div').slideToggle(50);
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
  $('.aassign-ticket').on('click', function(event) {
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

    // on click edit ticket
  $('.assign-ticket').on('click', function(event) {
    $.ticket = $(this).parent('div');
    $.edit_ticket = true;

    load_assign_ticket();
    show_overlay($);
  })

  function load_assign_ticket() {

    ticket_type = $.ticket.data('device-type');

    edit_box = $("#device-ticket-box");

    // Close icon
    edit_box.append('<a href="#" class="close">x</a>');

    // Title
    edit_box.append('<h2>'+ fl_ticket.assign_ticket + '</h2>');

    //Body

    //device Select
    device_select = $('<select id="ticket-device-select"></select>');
    device_select_p = $('<p>' + fl_ticket.ticket_device + '  : </p>');
    device_select_p.append(device_select);
    set_device_select(device_select, $.ticket.data('user-id'), ticket_type, $.ticket.data('device-id'));
    edit_box.append(device_select_p);

    if($.calc_time) {
      //Eddit Time Options
      edit_box.append('<p>' + fl_ticket.ticket_duration + ': <select id="ticket-time-select"></select></p>');
      $("#ticket-time-select").empty();
      for (time = $.time_interval; time < $.max_time; time+=$.time_interval) {
        $("#ticket-time-select").append( new Option(minutesToHours(time), time) );
      }
      $("#ticket-time-select").append( new Option(minutesToHours($.max_time), $.max_time) );
      $("#ticket-time-select").val($.ticket.data('duration'));
    }
    
    //add Buttons
    edit_box.append('<input type="submit" id="submit-ticket" class="button-primary" value="' + fl_ticket.assign_ticket + '"/>');
    edit_box.append('<input type="submit" id="cancel-ticket" class="button-primary" value="' + fl_ticket.ticket_cancel + '"/>');  
  }

  function set_device_select(device_select, user_id, ticket_type, device_id) {
    // Set Device Name Dropdown
    data = {
      action: 'get_devices_of_device_types',
      user_id: user_id,
      ticket_type: ticket_type,
      device_id: device_id,
    };
    $.post(ajaxurl, data, function(response) {
      var device_type_list = JSON.parse(response);
      $.each(device_type_list, function(id, name) {
        device_select.append( new Option(this.name, this.id) );
      });
      if(ticket_type == 'device')
        device_select.val(device_id);
    })  
  }


  // on click submit ticket
     // on click submit ticket
  $('body').on('click','#submit-ticket', function(){

    if($.calc_time)
      duration = $('#ticket-time-select :selected').val();
    else
      duration = $.max_time;

    data = {
      action: 'add_timeticket',
      device_id:  $('#ticket-device-select :selected').val(),
      duration:  duration,
      user_id:  $.ticket.data('user-id'),
      ticket_id:  $.ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      close_overlay($, orig_overflow);
      message_success($, time_ticket_caption + " für das " + fl_ticket.ticket_device + ": " + $.ticket.data('device-name') + ", erfolgreich erstellt!", true);
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
  $('body').on('click', '#cancel-ticket', function(){
    close_overlay($, orig_overflow);
  })
  $('body').on('click', '.close', function() {
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
function show_overlay($){
  // show container
  $("#overlay-ticket").fadeIn(600);
  $("#device-ticket-box").show();
  $('body').css( 'overflow', 'hidden' );
}

// closes overlay
// if message set, display message and reload
function close_overlay($, orig_overflow){
  $('body').css( 'overflow', orig_overflow );    
  $(".fl-overlay").hide();
  $("#overlay-background").fadeOut(600);
  $("#device-ticket-box").empty();
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