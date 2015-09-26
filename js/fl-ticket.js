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
    $("#time-select").empty();
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#time-select").append( new Option(minutesToHours(max_time), max_time) );

    // Set Device Name
    $('#device-name').replaceWith('<p id="device-name" >Gerät: <b>' + device.data('device-name') + '</b></p>');

    $("#overlay").fadeIn(600);

    // Set Device Content
    data = {
      action: 'get_device_content',
      device_id: device.data('device-id'),
    };
    $.post(ajaxurl, data, function(response) {
        $('body').css( 'overflow', 'hidden' );
        $('#device-content').empty();
        $('#device-content').append(response);
        $("#device-ticket-box").show();
    })
  })

  // on click submit ticket
  $('#submit-ticket').on('click', function(){
    data = {
      action: 'add_ticket',
      device_id:  device.data('device-id'),
      duration:  $('#time-select :selected').val(),
    };
    $.post(ajaxurl, data, function(response) {
      $('#fl-getticket').hide();
      close_overlay($, orig_overflow, "Ticket für das " + device.data('device-name') + ", erfolgreich erstellt!");
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
      action: 'get_online_devices_select_options'
    };
    $.post(ajaxurl, data, function(response) {
      var device_list = JSON.parse(response);
      $('#device-select').empty();
      $.each(device_list, function(time, caption) {
        $("#device-select").append( new Option(this.device,this.id) );
      });
      $("#device-select").val(ticket.data('device-id'));
    })

    data = {
      action: 'get_device_content',
      device_id: ticket.data('device-id'),
    };
    $.post(ajaxurl, data, function(response) {
      $('#device-content').empty();
      $('#device-content').append(response);
    })

    //Refresh Content when Dropdown change
    $("#device-select").change(function () {
      // Change Device Content
      data = {
        action: 'get_device_content',
        device_id: $(this).val(),
      };
      $.post(ajaxurl, data, function(response) {
        $('#device-content').empty();
        $('#device-content').append(response);
      })
    });

    //Eddit Time Options
    $("#time-select").empty();
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#time-select").append( new Option(minutesToHours(max_time), max_time) );
    $("#time-select").val(ticket.data('duration'));

    $("#overlay").fadeIn(600);
    $("#box").fadeIn(600);

    // Set Device Content
    data = {
      action: 'get_device_content',
      device_id: $('#ticket-device-id').val(),
    };
    $.post(ajaxurl, data, function(response) {
        $('#device-content').empty();
        $('#device-content').append(response);
        $("#device-ticket-box").show();
        $('body').css( 'overflow', 'hidden' );
    })
    return false;
  })

  // Save Button clicked
  $('#submit-change-ticket').on('click', function(){
    var device_id = $('#device-select :selected').val();
    var device_name = $('#device-select :selected').text();
    var duration = $('#time-select :selected').val();
    var ticket_id = ticket.data('ticket-id');
    data = {
      action: 'update_ticket',
      device_id:  device_id,
      duration:  duration,
      ticket_id:  ticket_id
    };
    $.post(ajaxurl, data, function(response) {
      $('#ticket-listing').hide();
      close_overlay($, orig_overflow, "Ticket für das " + device_name + ", erfolgreich geändert!");
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
      $('#ticket-listing').hide();
      close_overlay($, orig_overflow, '"Ticket wurde gelöscht!"');
    })
  })

  // Cancle Functions
  $('#cancel-change-ticket').on('click', function() {
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

function reloadPage(){
  location.reload();
}

// closes overlay
// if message set, display message and reload
function close_overlay($, orig_overflow, message){
    $('body').css( 'overflow', orig_overflow );    
    $("#device-ticket-box").hide();
    $("#overlay").fadeOut(600);
    if(message != '') {
      $('#message').text(message);
      $('#message').show();
      setTimeout(reloadPage, 2000);
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
