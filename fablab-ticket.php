<?php
/*
Plugin Name: FabLab Ticket
Version: 0.2.5
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
include 'timeticket/timeticket.php';
include 'ticket/ticket.php';
include 'ticket/ticket-shortcode.php';
include 'admin-page.php';
include 'manage-scripts.php';

new AdminPage();
new Device();
new TimeTicket();
new Ticket();
new TicketShortcode();
new ManageScripts();

?>