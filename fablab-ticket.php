<?php
/*
Plugin Name: FabLab Ticket
Version: 0.1.0
Plugin URI: http://fablab.tugraz.at
Description: Ticketing and Reservation System for FabLabs
Author: Jakob Ellmaier
Author URI: http://medienbausatz.at
GitHub Plugin URI: https://github.com/jellmaier/fablab-ticket
GitHub Branch:     master
Licence: GP2
*/



include 'devices/device.php';
include 'advanced-fields/device-fields.php';
include 'reservation/reservation.php';
include 'ticket/ticket.php';

new Device();
new DeviceFields();
new Reservation();
new Ticket();

?>
