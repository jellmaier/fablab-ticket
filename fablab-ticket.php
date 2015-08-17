<?php
/*
Plugin Name: FabLab Ticket
Version: 0.1.0
Plugin URI: http://fablab.tugraz.at
Description: Ticketing and Reservation System for FabLabs
Author: Jakob Ellmaier
Author URI: http://medienbausatz.at
Licence: GP2
*/



include 'devices/device.php';
include 'advanced-fields/device-fields.php';
//include 'reservation.php';

new Device();
new DeviceFields();
//new Reservation();

?>
