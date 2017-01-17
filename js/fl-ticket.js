jQuery(document).ready(function($){

  var max_time = '';
  var time_interval = '';
  var ticket_caption = '';
  var device_caption = '';
  var time_ticket_caption = '';
  var instruction_caption = '';
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
    $.ticket_caption = options.ticket_caption;
    $.device_caption = options.device_caption;
    $.time_ticket_caption = options.time_ticket_caption;
    $.instruction_caption = options.instruction_caption;
  })

  var orig_overflow = $( 'body' ).css( 'overflow' );
  var device = '';
  var edit_ticket = false;
  var ticket = '';

  // busy indicator handler
  $(".busy").bind("ajaxSend", function() {
    $(this).fadeIn(200);
  }).bind("ajaxStop", function() {
    $(this).fadeOut(200);
  }).bind("ajaxError", function() {
    $(this).fadeOut(200);
  });


  // Help handler
  $('.help-button').on('click', function(event) {
    $('.help-box').slideToggle(150);
  })
  
  $('.help-headder').on('click', function(event) {
    $('.help-content:visible').slideUp(100);
    $(this).next().slideDown(150);
  })

  // TAC handler
  $('#tac-show').on('click', function(event) {
    $('#tac-content').slideDown(150);
  })
  
  $('#accept-tac').on('click', function(event) {
    data = {
      action: 'set_user_tac_accaptance'
    };
    $.post(ajaxurl, data, function(response) {
      message_success($, fl_ticket.tac_confirmed, true);
      $('#tac-message').slideUp(150);
      $('#tac-content').slideUp(150);
    })
  })
  $('#cancel-tac').on('click', function(event) {
    $('#tac-content').slideUp(150);
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
        message_success($, fl_tticket.tticket_finished.replace('{0}', time_ticket.data('user')));
        time_ticket.hide();
      } else {
        message_error($, fl_tticket.tticket_nstoped);
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
        message_success($, fl_tticket.tticket_extended.replace('{0}', time_ticket.data('user')));
        time_ticket.hide();
      } else {
        message_error($, fl_tticket.tticket_nextended);
      }
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
        message_success($, fl_iticket.iticket_createt.replace('{0}', device.data('device-name')));
        device.hide();
      } else {
        message_error($, fl_iticket.iticket_ncreatet);
      }
    })
  })

  // on click delete instruction ticket
  // load overlay content
  $('.delete-instruction').on('click', function(event) {
    
    //Get Ticket Element
    $.ticket = $(this).parent('div');

    // Set Device Content
    data = {
      action: 'delete_ticket',
      ticket_id: ticket.data('ticket-id'),
    };
    $.post(ajaxurl, data, function(response) {
      if(response){
        message_success($, fl_iticket.iticket_deleted);
        ticket.hide();
      } else {
        message_error($, fl_iticket.iticket_ndeleted);
      }
    })
  })

  //--------------------------------------------
  //Ticket listings section
  //--------------------------------------------

  // on click get device ticket
  // load overlay content
  $('.get-ticket').on('click', function(event) {
    
    //Get Device Element
    $.device = $(this);
    $.ticket_type = $.device.data('device-type');
    $.edit_ticket = false;

    $.when(load_get_ticket()).then(show_overlay($));


  })


  // on click edit ticket
  $('.edit-ticket').on('click', function(event) {
    $.ticket = $(this).parent('div');
    $.edit_ticket = true;

    load_edit_ticket();
    show_overlay($);
  })

  function load_edit_ticket() {

    ticket_type = $.ticket.data('device-type');

    edit_box = $("#device-ticket-box");

    // Close icon
    edit_box.append('<a href="#" class="close">x</a>');

    // Title
    edit_box.append('<h2>'+ fl_ticket.edit_ticket + '</h2>');

    //Body

    //device Select
    device_select = $('<select id="ticket-device-select"></select>');
    device_select_p = $('<p>' + fl_ticket.ticket_device + '  : </p>');
    device_select_p.append(device_select);
    set_device_select(device_select, $.ticket.data('user-id'), ticket_type, $.ticket.data('device-id'));
    edit_box.append(device_select_p);
          
    // Set Device Conntent
    device_content = $('<div id="ticket-device-content"></div>');
    set_device_content(device_content, $.ticket.data('device-id'), ticket_type);
    edit_box.append(device_content);


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
    edit_box.append('<input type="submit" id="submit-ticket" class="button-primary" value="' + fl_ticket.save_ticket + '"/>');
    edit_box.append('<input type="submit" id="delete-ticket" class="button-primary" value="' + fl_ticket.ticket_delete + '"/>');
    edit_box.append('<input type="submit" id="cancel-ticket" class="button-primary" value="' + fl_ticket.ticket_cancel + '"/>');
    
  }

      //Refresh Content when Dropdown change
  $('body').on('change', '#ticket-device-select', function () {

    // Set Device Conntent
    device_contetn_div = $('#ticket-device-content');
    device_id = $('#ticket-device-select :selected').val();
    ticket_type = $.ticket.data('device-type');
    set_device_content(device_contetn_div, device_id, ticket_type);
  
  });


  function set_device_content(device_content, device_id, ticket_type) {

    if(ticket_type == 'device') {
      // Set Device Content
      data = {
        action: 'get_device_content',
        device_id: device_id,
      };
      $.post(ajaxurl, data, function(response) {
          device_content.empty();
          device_content.append(response);  
      })
    } else if (ticket_type == 'device_type'){
      // Set Device-Type Content
      data = {
        action: 'get_device_type_description',
        device_type_id: device_id,
      };
      $.post(ajaxurl, data, function(response) {
          device_content.empty();
          device_content.append(response);
      })

      /*
      $.ajax({
          type: "POST",
          url: ajaxurl,
          data: data,
          async: false,
      }).done(function( response ) {
*/
    } 
  }

  function set_device_select(device_select, user_id, ticket_type, device_id = '') {

    if(ticket_type == 'device') {
      // Set Device Name Dropdown
      data = {
        action: 'get_user_device_permission',
        user_id: user_id,
      };
      $.post(ajaxurl, data, function(response) {
        var device_list = JSON.parse(response);
        $.each(device_list, function(time, caption) {
          device_select.append( new Option(this.device,this.id) );
        });
        set_device_selected(device_select, device_id);
      })
    } else if(ticket_type == 'device_type') {
      // Set Device Name Dropdown
      data = {
        action: 'get_device_types',
        user_id: user_id,
      };
      $.post(ajaxurl, data, function(response) {
        var device_type_list = JSON.parse(response);
        $.each(device_type_list, function(id, name) {
          device_select.append( new Option(this.name, this.id) );
        });
        set_device_selected(device_select, device_id);
      })
    }   
  }

  function set_device_selected(device_select, device_id) {
    if(device_id != '')
     device_select.val(device_id);
  }

  function load_get_ticket() {

    edit_box = $("#device-ticket-box");

    // Close icon
    edit_box.append('<a href="#" class="close">x</a>');

    // Title
    edit_box.append('<h2>'+ fl_ticket.confirm_ticket + '</h2>');

    //-----------------------------
    //Body

    // Set Device Name
    device_name_div = $('<div class="device-name"></div>');
    device_name_p = $('<p id="get-ticket-device-name"></p>');
    device_name_p.html( fl_ticket.ticket_device + ': <b>' + $.device.data('device-name') + '</b>');
    device_name_div.append(device_name_p);
    edit_box.append(device_name_div);

    // Set Device Conntent
    device_content = $('<div id="ticket-device-content"></div>');
    set_device_content(device_content, $.device.data('device-id'), $.ticket_type);
    edit_box.append(device_content);

    if($.calc_time) {
      //Eddit Time Options
      edit_box.append('<p>' + fl_ticket.ticket_duration + ': <select id="ticket-time-select"></select></p>');
      $("#ticket-time-select").empty();
      for (time = $.time_interval; time < $.max_time; time+=$.time_interval) {
        $("#ticket-time-select").append( new Option(minutesToHours(time), time) );
      }
      $("#ticket-time-select").append( new Option(minutesToHours($.max_time), $.max_time) );
    }

    // set buttons
    edit_box.append('<input type="submit" id="submit-ticket" class="button-primary" value="' + fl_ticket.get_ticket + '"/>');
    edit_box.append('<input type="submit" id="cancel-ticket" class="button-primary" value="' + fl_ticket.ticket_cancel + '"/>');

  }

    // on click submit ticket
  $('body').on('click','#submit-ticket', function(){

    if($.edit_ticket == true) {
      update_ticket($);
    } else {
      submit_ticket($);
    } 
  })

  // Delete Button clicked
  $('body').on('click', '#delete-ticket', function(){
    var ticket_id = $.ticket.data('ticket-id');
    data = {
      action: 'delete_ticket',
      ticket_id:  ticket_id
    };
    $.post(ajaxurl, data, function(response) {
      $.ticket.hide();
      if(response){
        message_success($, fl_ticket.ticket_deleted);
      } else {
        message_error($, fl_ticket.ticket_ndeleted);
      }
    })
    close_overlay($, orig_overflow);
  })

  // on click cancle ticket
  $('body').on('click', '#cancel-ticket', function(){
    close_overlay($, orig_overflow);
  })
  $('body').on('click', '.close', function() {
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

// on click submit ticket
function submit_ticket($){
  if($.calc_time)
    duration = $('#ticket-time-select :selected').val();
  else
    duration = $.max_time;

  data = {
    action: 'add_ticket',
    device_id:  $.device.data('device-id'),
    duration:  duration,
    type:  $.device.data('device-type'),
  };
  $.post(ajaxurl, data, function(response) {
    if(response){
      $.device.hide();
      //String.format('{0} is dead, but {1} is alive! {0} {2}', 'ASP',
      //message_success($,  String.format(fl_ticket.ticket_created , $.device.data('device-name')));
      message_success($,  fl_ticket.ticket_created.replace('{0}', $.device.data('device-name')));
    } else {
      message_error($, fl_ticket.ticket_ncreated);
    }
  })
  close_overlay($, $.orig_overflow);
}

// Save Button clicked
function update_ticket($){
  if($.calc_time)
    duration = $('#ticket-time-select :selected').val();
  else
    duration = $.max_time;
   
  $.ticket.hide();
  var device_id = $('#ticket-device-select :selected').val();
  var device_name = $('#ticket-device-select :selected').text();
  var duration = duration;
  var ticket_id = $.ticket.data('ticket-id');
  data = {
    action: 'update_ticket',
    device_id:  device_id,
    duration:  duration,
    ticket_id:  ticket_id,
    type:  $.ticket.data('device-type')
  };
  $.post(ajaxurl, data, function(response) {
    if(response){
      $.ticket.hide();
      message_success($, fl_ticket.ticket_changed.replace('{0}', device_name));
    } else {
      message_error($, fl_ticket.ticket_nchanged);
    }
  })
  close_overlay($, $.orig_overflow);
}

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
function close_overlay($, orig_overflow){
  $('body').css( 'overflow', orig_overflow );    
  $(".device-ticket").hide();
  $(".fl-overlay").fadeOut(600);
  $("#device-ticket-box").empty();
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
  ret = (hours > 0 ? (hours > 1 ? fl_minhour.hours : fl_minhour.hour) : (''));
  ret = ret.replace('{0}', hours);
  ret += (((hours > 0) && (minutes > 0)) ? ' ' : '');
  ret += (minutes > 0 ? (minutes > 1 ? fl_minhour.minutes : fl_minhour.minute) : (''));
  ret = ret.replace('{0}', minutes);
  return ret;
}
