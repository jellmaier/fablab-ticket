jQuery(document).ready(function($){
	$('#colorPicker').tinycolorpicker();


  $('.user-permission-chekbox').change(function() {
    data = {
      action: 'set_user_device_permission',
      user_id: $(this).parent().parent('tr').attr('id'),
      device_id:  $(this).attr('id'),
      set_permission: $(this).is(":checked")
    };
    $.post(ajaxurl, data, function(response) {
      if(!response){
        $("#error-message-box").empty();
        $("#error-message-box").append(
          '<div id="setting-error" class="error settings-error notice is-dismissible">' + 
            '<p><strong>Berechtigung konnte nicht gespeichert werden!</strong></p>'+
            '<button type="button" class="notice-dismiss"><span class="screen-reader-text">Diese Meldung verwerfen.</span></button>' +
          '</div>'
        )
      } 
    })    
  })
	
});