<?php
/*
Plugin Name: FabLab Ticket
Version: 1.9.4
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
include 'devices/location.php';
include 'timeticket/timeticket.php';
include 'ticket/ticket.php';
include 'shortcode/ticketlist-shortcode-admin-rest.php';
include 'shortcode/ticket-shortcode-user-rest.php';
include 'shortcode/calendar-shortcode.php';
include 'shortcode/logout-shortcode.php';
include 'admin-page.php';
include 'user-list.php';
include 'js/strings.php';
include 'manage-scripts.php';
include 'restapi/ticketlist-user.php';
include 'restapi/pinplugin.php';
include 'nfc-login/login-shortcode.php';




$options = new AdminPage();
//new NFCLoginShortcode();
new UserList();
new Device();
new TimeTicket();
new Ticket();
new TicketShortcodeRest();
new TicketListShortcodeRest();
new CalendarShortcode();
new ManageScripts();
//new LogoutShortcode();

?>