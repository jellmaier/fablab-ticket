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
        close_overlay($, orig_overflow, "Einschulungs - Ticket für das " + device.data('device-name') + ", erfolgreich erstellt!");
      } else {
        close_overlay($, orig_overflow, "Ticket konnte nicht erstellt werden!");
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
        close_overlay($, orig_overflow, "Einschulungs - Ticket wurde gelöscht!");
        ticket.hide();
      } else {
        close_overlay($, orig_overflow, "Ticket konnte nicht gelöscht werden!");
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
        $('#fl-getticket').hide();
        close_overlay($, orig_overflow, "Ticket für das " + device.data('device-name') + ", erfolgreich erstellt!");
      } else {
        close_overlay($, orig_overflow, "Ticket konnte nicht erstellt werden!");
      }
    })
  })

  // on click cancle ticket
  $('#cancel-ticket').on('click', function(){
    close_overlay($, orig_overflow, '');
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
        close_overlay($, orig_overflow, "Ticket für das " + device_name + ", erfolgreich geändert!");
      } else {
        close_overlay($, orig_overflow, "Ticket konnte nicht geändert werden!");
      }
    })
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
        close_overlay($, orig_overflow, "Ticket wurde gelöscht!");
      } else {
        close_overlay($, orig_overflow, "Ticket konnte nicht gelöscht werden!");
      }
    })
  })

  // Cancle Functions
  $('#cancel-change-ticket').on('click', function() {
    close_overlay($, orig_overflow, '');
  })
  $('.close').on('click', function() {
    close_overlay($, orig_overflow, '');
  })
  $('.fl-overlay-background').on('click', function() {
    close_overlay($, orig_overflow, '');
  })
  $(document).keyup(function(event){
    if (event.keyCode == 27) {
      close_overlay($, orig_overflow, '');
    }
  });

});

function reloadPage(){
  location.reload();
}

// closes overlay
// if message set, display message and reload
function close_overlay($, orig_overflow, message){
    $('body').css( 'overflow', orig_overflow );    
    $(".device-ticket").hide();
    $(".fl-overlay").fadeOut(600);
    if(message != '') {
      $('#message').text(message);
      $('#message').show();
      setTimeout(reloadPage, 1000);
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
