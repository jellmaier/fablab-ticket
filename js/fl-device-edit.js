jQuery(document).ready(function($){
	$('#colorPicker').tinycolorpicker();

	$('#ticket-option-submit').on('click', function() {
		data = {
	      action: 'update_ticket_options',
	      ticket_per_user: $('#ticket-per-user').val(),
	      ticket_time_interval: $('#ticket-time-interval').val(),
	      ticket_max_time: $('#ticket-max-time').val(),
	    };
	    $.post(ajaxurl, data, function(response) {
	    	//alert(response);
	    })
	})
	
});