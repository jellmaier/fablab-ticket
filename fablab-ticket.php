<?php
/*
Plugin Name: FabLab Ticket 3.1.3
Version: 3.0.1
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

load_plugin_textdomain( 'fablab-ticket', false, dirname( plugin_basename( __FILE__ ) ) . 'system/languages'  );


include 'plugins/pinplugin.php';
include 'plugins/nfc-login/login-shortcode.php';
include 'plugins/resttest/resttest-shortcode.php';
include 'posttypes/devices/device.php';
include 'posttypes/timeticket/timeticket.php';
include 'posttypes/ticket/ticket.php';
include 'views/app-shortcode.php';
include 'views/ticketlist/ticketlist-shortcode-rest.php';
include 'views/getticket/getticket-shortcode-rest.php';
include 'system/admin-page.php';
include 'system/strings.php';
include 'system/user-list.php';
include 'system/rest/ticketlist-user.php';
include 'manage-scripts.php';




$options = new AdminPage();
new UserList();
new Device();
new TimeTicket();
new Ticket();
new FlNgAppShortcodeRest();
new TicketShortcodeRest();
new TicketListShortcodeRest();
new ManageScripts();
new RestTestShortcode();

?>