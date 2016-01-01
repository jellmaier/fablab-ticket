jQuery(document).ready(function($){

  $('#get-fullscreen').on('click', function(event) {
    reload_page($, true);
  })

  $('#close-fullscreen').on('click', function(event) {
    reload_page($, false);
  })

  var reload = function(){
    reload_page($, ($('#fullscreen').val() == true));
  }

  setTimeout(reload, 15000);
  
});


function reload_page($, fullscreen) {
  var fullscr = '';
  var devices = [];
  var device_string = '';
  if(fullscreen) {
    fullscr = 'fullscreen&';
  }
  if($('#fullscreen').val()){
    device_string = $('.fl-fullscreen-layer').data('devices');
  } else {
    $('.device-checkbox').each(function(){
      if(this.checked){
        devices.push(this.id);
      }
    })
    device_string = devices.join(',');
  }

  var next = '';
  var next_device = $("#next-device").data('next-device');
  if(next_device) {
    next = '&next=' + next_device;
  }

  window.location = '?' + fullscr + 'width=' + $(document).width() + '&height=' + $(document).height() 
    + '&devices=' + device_string + next;
}