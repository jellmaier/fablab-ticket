<?php
/*
Plugin Name: FabLab Ticket
Version: 0.4.3
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
include 'timeticket/instruction.php';
include 'ticket/ticket.php';
include 'ticket/ticket-handler.php';
include 'shortcode/ticket-shortcode.php';
include 'shortcode/ticketlist-shortcode.php';
include 'shortcode/calendar-shortcode.php';
include 'admin-page.php';
include 'user-list.php';
include 'manage-scripts.php';

new AdminPage();
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