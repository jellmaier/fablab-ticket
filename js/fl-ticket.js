jQuery(document).ready(function($){
  $('#fl-getticket').on('click', function(event) {

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
    
    //Get Device ID
    var device_id = $( event.target ).closest( 'a' ).data('name');
    $('#device-id').val(device_id);

    //Eddit Time Options
    $.each(time_option_values, function(time, caption) {
      $("#time-select").append( new Option(caption,time) );
    });

    // Set Device Name
    data = {
      action: 'get_device_title',
      device_id: device_id,

    };
    $.post(ajaxurl, data, function(response) {
      
        $('#device-name').replaceWith('<p id="device-name" >Gerät: <b>' + response + '</b></p>');
    })

    // Set Device Content
    data = {
      action: 'get_device_content',
      device_id: device_id,

    };
    $.post(ajaxurl, data, function(response) {
      
        $('#device-content').append(response);
        $("#overlay").show();
        $("#device-ticket-box").show();

    })

    return false;
  })

  $('#submit-ticket').on('click', function(){
    var device_id = jQuery('#device-id').val();
    var device_name = jQuery('#device-name').text();
    //alert(device_id);
    

    data = {
      action: 'add_ticket',
      device_id:  device_id,
    };
    $.post(ajaxurl, data, function(response) {
      
      $('#fl-getticket').hide();
      $('#device-ticket-box').hide();
      $('#overlay').hide();
      $('#message').text("Ticket für das " + device_name + ", erfolgreich erstellt!");
      $('#message').show();
      $('#time-select').empty();
      $('#device-id').val('');
      $('#device-name').empty();
      $('#device-content').empty();
    })

  })

  $('#cancel-ticket').on('click', function(){
    $("#device-ticket-box").hide();
    $("#overlay").hide();
    $("#time-select").empty();
    $('#device-id').val('');
    $('#device-name').empty();
    $('#device-content').empty();
  })



});