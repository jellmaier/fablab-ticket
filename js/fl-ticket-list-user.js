jQuery(document).ready(function($){

  $('#get-fullscreen').on('click', function(event) {
    reload_page($, true);
  })

  $('#close-fullscreen').on('click', function(event) {
    reload_page($, false);
  })

  $('#show-all-devices').on('click', function(event) {
    window.location = '?width=' + $(document).width() + '&height=' + $(document).height() 
    + '&alldevices';
  })

  $('#show-used-devices').on('click', function(event) {
    window.location = '?width=' + $(document).width() + '&height=' + $(document).height() 
    + '&useddevices';
  })

  $('#show-free-devices').on('click', function(event) {
    window.location = '?width=' + $(document).width() + '&height=' + $(document).height() 
    + '&freedevices';
  })

  $('#show-selected-devices').on('click', function(event) {
    var devices = [];
    var device_string = '';
    $('.device-checkbox').each(function(){
      if(this.checked){
        devices.push(this.id);
      }
    })
    device_string = devices.join(',');
    window.location = '?width=' + $(document).width() + '&height=' + $(document).height() 
    + '&devices=' + device_string;
  })

  if($('#fullscreen').val() == true) {
    var reload = function(){
      reload_page($, true);
    }

    setTimeout(reload, 15000);
  }

  if($('#refreshnow').data('now') == 1) {
    reload_page($, true);
  }

});

function set_menu_active($) {
  var device_string = $('#fl-device-string').data('devices-string');
  if(device_string == '&alldevices') {
    
  }
}


function reload_page($, fullscreen) {
  var fullscr = (fullscreen) ? 'fullscreen&' : '';
  var device_string = $('#fl-device-string').data('devices-string');


  var next = '';
  var next_device = $("#next-device").data('next-device');
  if(next_device) {
    next = '&next=' + next_device;
  }

  window.location = '?' + fullscr + 'width=' + $(document).width() + '&height=' + $(document).height() 
    + device_string + next;
}