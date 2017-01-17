<?php
/*
Plugin Name: FabLab Ticket
Version: 0.8.1
Plugin URI: https://github.com/jellmaier/fablab-ticket
Description: Ticketing and Reservation System for FabLabs
Author: Jakob Ellmaier
Text Domain: fablab-ticket
Author URI: http://medienbausatz.at
GitHub Plugin URI: https://github.com/jellmaier/fablab-ticket
GitHub Branch:     master
License: GPLv3
*/

//namespace fablab_ticket;

load_plugin_textdomain( 'fablab-ticket', false, dirname( plugin_basename( __FILE__ ) ) . '/languages'  );


include 'devices/device.php';
include 'devices/device-type.php';
include 'timeticket/timeticket.php';
include 'timeticket/instruction.php';
include 'ticket/ticket.php';
include 'ticket/ticket-handler.php';
include 'shortcode/ticket-shortcode.php';
include 'shortcode/ticketlist-shortcode.php';
include 'shortcode/calendar-shortcode.php';
include 'admin-page.php';
include 'user-list.php';
include 'manage-scripts.php';

$options = new AdminPage();
new UserList();
new Device();
new Instruction();
new TimeTicket();
new Ticket();
new TicketShortcode();
new TicketListShortcode();
new CalendarShortcode();
new ManageScripts();

?>