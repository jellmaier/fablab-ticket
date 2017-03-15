<?php

//namespace fablab_ticket;


if (!class_exists('TicketListShortcodeRest'))
{
  class TicketListShortcodeRest
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'ticket-list-rest', 'get_rest_ticketlist_shortcode' );
    }
  }
}




//--------------------------------------------------------
// Display active Tickets
//--------------------------------------------------------
function get_rest_ticketlist_shortcode($atts) {

  global $fl_ticketlist_user_rest;
  $fl_ticketlist_user_rest = true;

  $html = '';

/*
  if (fablab_get_option('ticket_calcule_waiting_time') == '1')
      $calc_waiting_time = true;
    else
      $calc_waiting_time = false;
*/
  // Display Tickets
  $html .= '<div ng-app="ticketListUser" ng-controller="ticketListUserCtrl" class="ticket-list">';
  $html .= '<p>Hier werden die wartende Personen angezeigt:</p>';
  $html .= '<div class="device-list-box" data-ng-repeat="device_type in device_types track by $index" ng-init="deviceIndex = $index" ';
  $html .= 'ng-show="device_type.completed" ng-cloak >';
  $html .= '<div class="device-toggle" style="border-left: 4px solid {{device_type.color}};" ng-click="device_type.show = !device_type.show">';
  $html .= '<p><b> {{ device_type.name }} </b></p></div>';
  $html .= '<div class="device-dropdown" ng-show="device_type.show">'; //hidden
  //$html .= '<div class="device-listing">';     
    $html .= '<p ng-if="!device_type.tickets && !device_type.notickets">Loading... </p>';
    $html .= '<p ng-if="device_type.notickets">Notickets</p>';
    $html .= '<p ng-click="loadDeviceTicket(device_type, true)">reload</p>';
    $html .= '<div data-ng-repeat="ticket in device_type.tickets track by $index " ng-init="ticketIndex = $index" >'; // | orderBy : \'status\'
      $html .= '<div class="fl-ticket-element {{ticket.status}}" ng-class="{blink: ticket.available }" '; 
        $html .= 'style="border-left: 5px solid {{ticket.color}}" ng-cloak>';
        //$html .= 'ng-show="ticket.completed" ng-cloak >';
        $html .= '<p>{{ ticket.post_date | date : "fullDate" }}<p>';
        $html .= '<h2>{{ ticket.post_title }}</h2>';
        $html .= '<p>für ' . fablab_get_captions('device_caption') . ': <b>{{ ticket.device_title }}</b></p>';
        //<?php if($calc_waiting_time) 
        //$html .= '<p>Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) </b></br>';
        //Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) </b></p>';
        $html .= '<input type="submit" ng-click="submit()" ';
        $html .= 'class="assign-ticket" value="' . fablab_get_captions('ticket_caption') . ' zuweisen"/>';
        $html .= '<input type="submit" ng-click="activateTicket(device_type, ticket)" ';
        $html .= 'class="activate-ticket" value="' . fablab_get_captions('ticket_caption') . ' aktivieren"/>';
        $html .= '<input type="submit" ng-click="deactivateTicket(device_type, ticket)" ';
        $html .= 'class="deactivate-ticket" value="' . fablab_get_captions('ticket_caption') . ' deaktivieren"/>';
        $html .= '<input type="submit" ng-click="deleteTicket(device_type, ticket, $ticketIndex)" ';
        $html .= 'class="delete-ticket" value="' . fablab_get_captions('ticket_caption') . ' löschen"/>';
      $html .= '</div>';
    $html .= '</div>';
  //$html .= '</div>';
  $html .= '<div class="device-close" ng-click="device_type.show = false" ><p><b>x</b> Schließen</br></p></div>';
  $html .= '</div></div>';
  $html .= '<div id="overlay-ticket" class="fl-overlay" ng-show="overlay">';
    $html .= '<div id="device-ticket-box" class="device-ticket" ng-show="overlay"></div>';
    $html .= '<div class="fl-overlay-background"></div>';
  $html .= '</div>';
  $html .= '</div>';

  return $html;

}





?>