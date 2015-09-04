jQuery(document).ready(function($){
  var max_time = 120;
  var time_interval = 15;
  $('#fl-getticket').on('click', function(event) {
    
    //Get Device ID
    var device_id = $( event.target ).closest( 'a' ).data('name');
    $('#device-id').val(device_id);

    //Eddit Time Options
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
      
        $('#device-content').append(response);
        $("#device-ticket-box").show();

    })

    return false;
  })

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
      $('#device-ticket-box').hide();
      $('#overlay').fadeOut(600);
      $('#message').text("Ticket für das " + device_name + ", erfolgreich erstellt!");
      $('#message').show();
      $('#time-select').empty();
      $('#device-id').val('');
      $('#device-name').empty();
      $('#device-content').empty();
      setTimeout(reloadPage, 2000);
    })
  })

  $('#cancel-ticket').on('click', function(){
    $("#device-ticket-box").hide();
    $("#overlay").fadeOut(600);
    $("#time-select").empty();
    $('#device-id').val('');
    $('#device-name').empty();
    $('#device-content').empty();
  })

  //--------------------------------------------
  //Ticket listings section
  //--------------------------------------------
  
    $('#ticket-listing').on('click', function(event) {

    var time_option_values = {
      15 : '1/4 Stunde',
      30 : '1/2 Stunde',
      45 : '3/4 Stunde',
      60 : '1 Stunde',
      75 : '1 1/4 Stunden',
      90 : '1 1/2 Stunden',
      105 : '1 3/4 Stunden',
      120 : '2 Stunden'
    };
    

    // Set Device Name Dropdown
    data = {
      action: 'get_online_devices_select_options'
    };
    $.post(ajaxurl, data, function(response) {
        var device_list = JSON.parse( response );
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
    for (time = time_interval; time < max_time; time+=time_interval) {
      $("#time-select").append( new Option(minutesToHours(time), time) );
    }
    $("#time-select").append( new Option(minutesToHours(max_time), max_time) );
    $("#time-select").val($('#ticket-duration').val());

    $("#overlay").fadeIn(600);
    // Set Device Content
    data = {
      action: 'get_device_content',
      device_id: $('#ticket-device-id').val(),
    };
    $.post(ajaxurl, data, function(response) {
        $('#device-content').append(response);
        $("#device-ticket-box").show();
    })
    return false;
  })

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
      $('#device-ticket-box').hide();
      $('#overlay').fadeOut(600);
      $('#message').text("Ticket für das " + device_name + ", erfolgreich geändert!");
      $('#message').show();
      $('#time-select').empty();
      $('#device-id').val('');
      $('#device-name').empty();
      $('#device-content').empty();
      setTimeout(reloadPage, 2000);
    })
  })

  $('#delete-change-ticket').on('click', function(){
    var ticket_id = $('#ticket-id').val();

    data = {
      action: 'delete_ticket',
      ticket_id:  ticket_id
    };
    $.post(ajaxurl, data, function(response) {
      $('#ticket-listing').hide();
      $("#device-ticket-box").hide();
      $("#overlay").fadeOut(600);
      $('#message').text("Ticket wurde gelöscht!");
      $('#message').show();
      setTimeout(reloadPage, 2000);
    })
  })

  $('#cancel-change-ticket').on('click', function(){
    $("#device-ticket-box").hide();
    $("#overlay").fadeOut(600);
    $("#time-select").empty();
    $('#device-id').val('');
    $('#device-select').empty();
    $('#device-content').empty();
  })


});

function reloadPage(){
  location.reload();
}

function minutesToHours($time){
  $ret = "";
  $hours = Math.floor($time / 60);
  $minutes = $time % 60;
  $hours > 0 ? ($ret = $hours + " Stunde") : ('');
  $hours > 1 ? ($ret += "n") : ('') ;
  $hours > 0 && $minutes > 0 ? ($ret += ", ") : ('') ;
  $minutes > 0 ? ($ret += $minutes + " Minute") : ('');
  $minutes > 1 ? ($ret += "n") : ('') ;
  return $ret;
}