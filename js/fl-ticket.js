jQuery(document).ready(function($){

  var max_time = '';
  var time_interval = '';
  data = {
    action: 'get_fablab_options'
  };
  $.post(ajaxurl, data, function(response) {
    var options = JSON.parse(response);
    max_time = parseInt(options.ticket_max_time);
    time_interval = parseInt(options.ticket_time_interval);
  })

  var orig_overflow = $( 'body' ).css( 'overflow' );
  var device = '';
  var ticket = '';


  // busy indicator handler
  $(".busy").bind("ajaxSend", function() {
    $(this).fadeIn(200);
  }).bind("ajaxStop", function() {
    $(this).fadeOut(200);
  }).bind("ajaxError", function() {
    $(this).fadeOut(200);
  });

  // on click get device ticket
  // load overlay content
  $('.get-ticket').on('click', function(event) {
    
    //Get Device Element
    device = $(this);

    //Eddit Time Options
    $("#get-ticket-time-select").empty();
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#get-ticket-time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#get-ticket-time-select").append( new Option(minutesToHours(max_time), max_time) );

    // Set Device Name
    $('#get-ticket-device-name').replaceWith('<p id="get-ticket-device-name" >Gerät: <b>' + device.data('device-name') + '</b></p>');

    $("#overlay-get-ticket").fadeIn(600);

    // Set Device Content
    data = {
      action: 'get_device_content',
      device_id: device.data('device-id'),
    };
    $.post(ajaxurl, data, function(response) {
        $('body').css( 'overflow', 'hidden' );
        $('#get-ticket-device-content').empty();
        $('#get-ticket-device-content').append(response);
        $("#device-get-ticket-box").show();
    })
  })

  // on click get instruction ticket
  // load overlay content
  $('.get-instruction').on('click', function(event) {
    
    //Get Device Element
    device = $(this);

    // Set Device Content
    data = {
      action: 'add_instruction_ticket',
      device_id: device.data('device-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        message_success($, "Einschulungsanfrage für " + device.data('device-name') + ", erfolgreich erstellt!");
        device.hide();
      } else {
        message_error($, "Ticket konnte nicht erstellt werden!");
      }
    })
  })

  // on click delete instruction ticket
  // load overlay content
  $('.delete-instruction').on('click', function(event) {
    
    //Get Ticket Element
    ticket = $(this).parent('div');

    // Set Device Content
    data = {
      action: 'delete_ticket',
      ticket_id: ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        message_success($, "Einschulungs - Ticket wurde gelöscht!");
        ticket.hide();
      } else {
        message_error($, "Ticket konnte nicht gelöscht werden!");
      }
    })
  })

  // on click submit ticket
  $('#submit-ticket').on('click', function(){
    data = {
      action: 'add_ticket',
      device_id:  device.data('device-id'),
      duration:  $('#get-ticket-time-select :selected').val(),
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        device.hide();
        message_success($, "Ticket für " + device.data('device-name') + ", erfolgreich erstellt!");
      } else {
        message_error($, "Ticket konnte nicht erstellt werden!");
      }
    })
    close_overlay($, orig_overflow);
  })

  // on click cancle ticket
  $('#cancel-ticket').on('click', function(){
    close_overlay($, orig_overflow);
  })

  //--------------------------------------------
  //Ticket listings section
  //--------------------------------------------
  
  // on click edit ticket
  $('.edit-ticket').on('click', function(event) {

    ticket = $(this).parent('div');

    // Set Device Name Dropdown
    data = {
      action: 'get_user_device_permission',
      user_id: ticket.data('user-id'),
    };
    $.post(ajaxurl, data, function(response) {
      var device_list = JSON.parse(response);
      $('#edit-ticket-device-select').empty();
      $.each(device_list, function(time, caption) {
        if(this.permission){
          $("#edit-ticket-device-select").append( new Option(this.device,this.id) );
        }
      });
      $("#edit-ticket-device-select").val(ticket.data('device-id'));
    })

    data = {
      action: 'get_device_content',
      device_id: ticket.data('device-id'),
    };
    $.post(ajaxurl, data, function(response) {
      $('#edit-ticket-device-content').empty();
      $('#edit-ticket-device-content').append(response);
    })

    //Refresh Content when Dropdown change
    $("#edit-ticket-device-select").change(function () {
      // Change Device Content
      data = {
        action: 'get_device_content',
        device_id: $(this).val(),
      };
      $.post(ajaxurl, data, function(response) {
        $('#edit-ticket-device-content').empty();
        $('#edit-ticket-device-content').append(response);
      })
    });

    //Eddit Time Options
    $("#edit-ticket-time-select").empty();
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#edit-ticket-time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#edit-ticket-time-select").append( new Option(minutesToHours(max_time), max_time) );
    $("#edit-ticket-time-select").val(ticket.data('duration'));

    $("#overlay-edit-ticket").fadeIn(600);

    // Set Device Content
    data = {
      action: 'get_device_content',
      device_id: $('#ticket-device-id').val(),
    };
    $.post(ajaxurl, data, function(response) {
        $('#edit-ticket-device-content').empty();
        $('#edit-ticket-device-content').append(response);
        $("#device-edit-ticket-box").show();
        $('body').css( 'overflow', 'hidden' );
    })
    return false;
  })

  // Save Button clicked
  $('#submit-change-ticket').on('click', function(){
    ticket.hide();
    var device_id = $('#edit-ticket-device-select :selected').val();
    var device_name = $('#edit-ticket-device-select :selected').text();
    var duration = $('#edit-ticket-time-select :selected').val();
    var ticket_id = ticket.data('ticket-id');
    data = {
      action: 'update_ticket',
      device_id:  device_id,
      duration:  duration,
      ticket_id:  ticket_id
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        ticket.hide();
        message_success($, "Ticket für " + device_name + ", erfolgreich geändert!");
      } else {
        message_error($, "Ticket konnte nicht geändert werden!");
      }
    })
    close_overlay($, orig_overflow);
  })

  // Delete Button clicked
  $('#delete-change-ticket').on('click', function(){
    var ticket_id = ticket.data('ticket-id');
    data = {
      action: 'delete_ticket',
      ticket_id:  ticket_id
    };
    $.post(ajaxurl, data, function(response) {
      ticket.hide();
      if(response){
        message_success($, "Ticket wurde gelöscht!");
      } else {
        message_error($, "Ticket konnte nicht gelöscht werden!");
      }
    })
    close_overlay($, orig_overflow);
  })

  // Cancle Functions
  $('#cancel-change-ticket').on('click', function() {
    close_overlay($, orig_overflow);
  })
  $('.close').on('click', function() {
    close_overlay($, orig_overflow);
  })
  $('.fl-overlay-background').on('click', function() {
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
function close_overlay($, orig_overflow){
  $('body').css( 'overflow', orig_overflow );    
  $(".device-ticket").hide();
  $(".fl-overlay").fadeOut(600);
}

// display message
// if message set, display message and reload
function message_success($, message){
  $('#message-container').append('<div class="message-box success"><p>' + message + '</p></div>');
  setTimeout(reloadPage, 1000);
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
