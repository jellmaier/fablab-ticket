jQuery(document).ready(function($){
	$('#fl-form').submit(function(){

		var device_type = jQuery('#device_type_dropdown').val();

		data = {
			action: 'add_ticket',
			tag: device_type,

		};
		$.post(ajaxurl, data, function(response) {
			//alert(response)
			
		});
		return false;
	})
	var logic = function( currentDateTime ){
	if (currentDateTime && currentDateTime.getDay() == 6){
		this.setOptions({
			minTime:'11:00'
		});
	}else
		this.setOptions({
			minTime:'8:00'
		});
	};
	
});