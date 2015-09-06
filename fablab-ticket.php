<?php
/*
Plugin Name: FabLab Ticket
Version: 0.2.3
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
include 'reservation/reservation.php';
include 'ticket/ticket.php';
include 'ticket/ticket-shortcode.php';
include 'admin-page.php';

new AdminPage();
new Device();
new Reservation();
new Ticket();
new TicketShortcode();

function fl_load_admin_script($hook) {
	global $fl_settings;

	wp_enqueue_script('fl_settings_ajax', plugin_dir_url(__FILE__) . 'js/fl-ajax.js', array('jquery') );
	wp_enqueue_style('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'css/jquery.datetimepicker.css');
	wp_enqueue_script('jquery.datetimepicker', plugin_dir_url(__FILE__) . 'js/jquery.datetimepicker.js', array('jquery') );

}
add_action('admin_enqueue_scripts', 'fl_load_admin_script');


function fl_load_script() {
	wp_register_script('fl_ticket_script', plugin_dir_url(__FILE__) . 'js/fl-ticket.js', array('jquery') );
	wp_register_style('fl_ticket_style', plugin_dir_url(__FILE__) . 'css/fl-ticket.css');
}
add_action('init', 'fl_load_script');


function print_fl_ticket_script() {
	global $fl_ticket_script;

	if ( ! $fl_ticket_script)
		return;

	wp_print_scripts('fl_ticket_script');
	wp_print_styles('fl_ticket_style');
}
add_action('wp_footer', 'print_fl_ticket_script');


?>