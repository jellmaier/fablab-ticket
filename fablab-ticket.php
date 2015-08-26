<?php
/*
Plugin Name: FabLab Ticket
Version: 0.1.4
Plugin URI: https://github.com/jellmaier/fablab-ticket
Description: Ticketing and Reservation System for FabLabs
Author: Jakob Ellmaier
Author URI: http://medienbausatz.at
GitHub Plugin URI: https://github.com/jellmaier/fablab-ticket
GitHub Branch:     master
Licence: GP2
*/

//namespace fablab_ticket;


include 'devices/device.php';
include 'advanced-fields/device-fields.php';
include 'reservation/reservation.php';
include 'ticket/ticket.php';

new Device();
new DeviceFields();
new Reservation();
new Ticket();

function fl_admin_page(){
	global $fl_settings;
	$fl_settings = add_options_page(__('Fablab Options', 'fl'), __('Fablab Options', 'fl'), 'manage_options', 'fl-options', 'fl_options_render');
}
add_action('admin_menu', 'fl_admin_page');

function fl_options_render(){
	?>
	<div class="wrap">
		<h2><?php _e('Fablab Options', 'fl'); ?></h2>
		<form id="fl-form" action="" metod="POST">
			<div>
				<?php
				$terms = get_terms( 'device_type' );
			    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
			      ?>
			        <select id="device_type_dropdown">
			        <option value="Chose Device">Chose Device</option>
			        <?php
			         foreach ( $terms as $term ) {
			           echo '<option value="' . $term->name . '">' . $term->name . '</option>';       
			         }
			         ?>
			        </select>
			        <?php
			     }
			     ?>
				<input type="submit" name="fl-submit" class="button-primary" value="<?php _e('Click', 'fl'); ?>"/>
			</div>
		</form>
		
		<form id="fl-radio">
			 <input type="radio" name="sex" value="male" checked>Male
		 	 <input type="radio" name="sex" value="female">Female
		</form> 
	</div>
	<?php
}

function fl_load_admin_script($hook) {
	global $fl_settings;

	//if($hook != $fl_settings)
	//	return;

    //wp_deregister_script( 'jquery' );
    //wp_register_script('jquery', plugin_dir_url(__FILE__) . 'js/jquery.js');
	//wp_enqueue_script('jquery');

	wp_enqueue_script('fl_settings_ajax', plugin_dir_url(__FILE__) . 'js/fl-ajax.js', array('jquery') );
	//wp_enqueue_script('jquery-ui-datepicker');
	wp_enqueue_style('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'css/jquery.datetimepicker.css');
	wp_enqueue_script('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'js/jquery.datetimepicker.js', array('jquery') );
	

}
add_action('admin_enqueue_scripts', 'fl_load_admin_script');




function fl_load_script() {
	wp_register_script('fl_ticket_script', plugin_dir_url(__FILE__) . 'js/fl-ticket-ajax.js', array('jquery') );
}
add_action('init', 'fl_load_script');

function print_fl_ticket_script() {
	global $fl_ticket_script;

	if ( ! $fl_ticket_script)
		return;

	wp_print_scripts('fl_ticket_script');
}
add_action('wp_footer', 'print_fl_ticket_script');


?>