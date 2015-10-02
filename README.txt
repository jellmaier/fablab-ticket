//------------------------------------------------------------
// README of Fablab Ticket 
// by Jakob Ellmaier
// 2.10.2015
//------------------------------------------------------------

//------------------------------------------------------------
// Functionalities:
// (+ implementet, - not implementet)
//------------------------------------------------------------

+ Manager add/edit Device
+ Manager add/edit Time-Tickets
- get briefing Ticket
- restrict premission to get Ticket
+ all: get Ticket
+ all: update Ticket
+ Manager: manage Ticket
+ Manager: Ticket to Time-Ticket
+ Manager: manage Ticket
+ Manager: get Time-Ticket
+ waiting time in respect of Tickets
+ waiting time in respect of current Time-Tickets

+ Resonsive Design
+ Published on Github

Possible Future Features:

- User: get Time - Ticket
- Using Time-Ticket system while Ticketing is on
  - waiting time in respect of future Time-Tickets

- multilingual
- load via jquery (no pagereload needed anymore)






//------------------------------------------------------------
// Shortcodes:
//
// To use the Ticketing System you have to 
// create/publish pages, wiht the following shortcodes
//------------------------------------------------------------

[user-ticket]
// User/Manager - Get/View your Ticket
// other - login message

[ticket-list]
// Manager - List to manage all tickets and active time-tickets
// other - view ticket list

[calendar]
// not working
// all - view time-ticket calendar




//------------------------------------------------------------
// Functionalities in detail:
// (+ implementet, - not implementet, ~ not working propwerly)
//------------------------------------------------------------


//------------------------------------------------------------
// root folder

+ fablab-ticket.php
  + headder for wordpress
  + init files

+ admin-page.php
  + Device Submenu
    + Ticket System Online
    + Ticket pro User
    + Zeit Intervall
    + Maximale Ticket Zeit
    + Zeit bis zur automatischen Deaktivierung
  + Sanitize Inputs
  + Getter Mehods
  + Setter Method (Ticket System Online)

+ manage-scripts.php
  + manage includes of css and jquery files


//------------------------------------------------------------
// ./css

+ css for shortcodes
fl-ticket-list.css
fl-ticket.css

+ includes for shortcodes
fullcalendar.print.css
fullcalendar.css
fullcalendar.min.css

+ includes for edit interface
text-color.png
tinycolorpicker.css
jquery.datetimepicker.css

//------------------------------------------------------------
// ./devices

+ device.php
  + Device Posttype
  + Custom Meta Fields
    + Status: (on/offline)
    + Device Color (tinycolorpicker)
  - Sanitize Admin Input Fields
  + Getter methods
    - sanitize
    + ...

//------------------------------------------------------------
// ./js

+ handler for edit interface
fl-device-edit.js
fl-timeticket-edit.js 

+ handler for shortcodes
fl-calendar.js    
fl-ticket-list.js
fl-ticket.js 

+ includes for edit interface
jquery.datetimepicker.js
jquery.tinycolorpicker.js
jquery.tinycolorpicker.min.js

+ includes for shortcodes
fullcalendar.min.js
jquery-ui.custom.min.js
moment.min.js
fullcalendar.js


//------------------------------------------------------------
// ./shortcodes


~ calendar-shortcode.php

+ ticketlist-shortcode.php
  + manager-view
    + ...
  + ohers-view
    + reload
      + every 10 seconds (when there are tickets)
      + every 60 seconds (when there are no tickets)

+ ticket-shortcode.php
  + Device view
    + ...
  + Ticket view
    + ...

//------------------------------------------------------------
// ./ticket

+ ticket.php
  + Ticket Posttype
  + Custom Meta fields
    + Gerät
    + Ticket dauer
    + User 
    + Activierungs Zeit // to check when ticket will be disabled after prefifined time
  - Sanitize Admin Input Fields
  + Getter Methods
    - sanitize
    + ...
  + Setter Methods
    + Sanitize Inputs
    + ...
  + Convert Time to Timestring

+ ticket-handler.php
  + Calculate Waiting Time
  + Waiting Time in respect of Tickets
  + Check and deactivate Ticket if is active on predifined time
  - Sanitize

//------------------------------------------------------------
// ./timeticket

+ timeticket.php
  + Waiting Time in respect of Current Time-Tickets
  - Waiting Time in respect of future Time-Tickets
  + Getter Methods
    - Sanitize
    + ...
  + Setter Methods
    - Sanitize Inputs
    + ...



