jQuery(document).ready(function($){
	$('#fl-getticket').on('click', function(event) {
	//$("#fl-form-getticket").submit(function(e){

		var device_type = $(event.target).closest('a').data('name');
		//var device_type = $(this).find('input[type="submit"]:focus').attr('name');
		

		if(device_type) {
			data = {
				action: 'add_ticket',
				tag: device_type,

			};
			$.post(ajaxurl, data, function(response) {

				if(response == "1") {
					$("#message").text("Ticket erfolgreich erstellt!");
					$("#message").show();
					$('#fl-getticket').hide()
				}
				else {
					$("#message").text("Ticket konnte leider nicht erstellt werden!");
					$("#message").show();
				}

			});
		}
		return false;
	})
});