<?php

//namespace fablab_ticket;


if (!class_exists('TicketShortcodeRest'))
{
  class TicketShortcodeRest
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'ticket-user-rest', 'get_rest_ticket_shortcode' );
    }
  }
}

//--------------------------------------------------------
// Display active Tickets
//--------------------------------------------------------
function get_rest_ticket_shortcode($atts) {

  //--------------------------------------------------------
  // Display Tickets from Current User
  //--------------------------------------------------------

  global $fl_ui_leaflet;
  $fl_ui_leaflet = true;

  global $fl_ticket_user_rest;
  $fl_ticket_user_rest = true;

  return '<div ng-app="ticketUser" ng-controller="ticketUserCtrl" ng-include="templates_url + \'ticketUserTemplate.html\'"></div>';
  //return '<div ng-app="demoapp" ng-controller="BasicFirstController"><leaflet width="100%" height="480px"></leaflet><h1>First steps, basic example</h1></div>';
 
}





?>