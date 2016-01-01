jQuery(document).ready(function($){
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

   $('.start_time').datetimepicker({
		onChangeDateTime:logic,
		onShow:logic,
		format:'Y-m-d H:i',
  		inline:false,
	});

	$('.end_time').datetimepicker({
		onChangeDateTime:logic,
		onShow:logic,
		format:'Y-m-d H:i',
  		inline:false,
	});

	$('.time').datetimepicker({
		onChangeDateTime:logic,
		onShow:logic,
		format:'Y-m-d H:i',
  		inline:false,
	});
	
});