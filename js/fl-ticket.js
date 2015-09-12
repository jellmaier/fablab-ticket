jQuery(document).ready(function($){
  var max_time = 120;
  var time_interval = 15;
  var orig_overflow = $( 'body' ).css( 'overflow' );


  // on click get device ticket
  // load overlay content
  $('#fl-getticket').on('click', function(event) {
    
    //Get Device ID
    var device_id = $( event.target ).closest( 'a' ).data('name');
    $('#device-id').val(device_id);

    //Eddit Time Options
    $("#time-select").empty();
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#time-select").append( new Option(minutesToHours(max_time), max_time) );

    // Set Device Name
    data = {
      action: 'get_device_title',
      device_id: device_id,
    };
    $.post(ajaxurl, data, function(response) {
      $('#device-name').replaceWith('<p id="device-name" >Gerät: <b>' + response + '</b></p>');
    })

    $("#overlay").fadeIn(600);

    // Set Device Content
    data = {
      action: 'get_device_content',
      device_id: device_id,
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
    var device_id = jQuery('#device-id').val();
    var device_name = jQuery('#device-name').text();
    var duration = jQuery('#time-select :selected').val();

    data = {
      action: 'add_ticket',
      device_id:  device_id,
      duration:  duration,
    };
    $.post(ajaxurl, data, function(response) {
      $('#fl-getticket').hide();
      close_overlay($, orig_overflow, "Ticket für das " + device_name + ", erfolgreich erstellt!");
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
  $('#ticket-listing').on('click', function(event) {

    // Set Device Name Dropdown
    data = {
      action: 'get_online_devices_select_options'
    };
    $.post(ajaxurl, data, function(response) {
        var device_list = JSON.parse( response );
        $('#device-select').empty();
        $.each(device_list, function(time, caption) {
          $("#device-select").append( new Option(this.device,this.id) );
        });
        $("#device-select").val($('#ticket-device-id').val());
    })

    //Refresh Content when Dropdown change
    $("#device-select").change(function () {
      var new_device_id = $(this).val();
      // Change Device Content
      data = {
        action: 'get_device_content',
        device_id: new_device_id,
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
    $("#time-select").val($('#ticket-duration').val());

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
    var ticket_id = $('#ticket-id').val();
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
    var ticket_id = $('#ticket-id').val();
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