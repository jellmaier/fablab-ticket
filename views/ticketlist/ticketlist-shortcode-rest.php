<?php

//namespace fablab_ticket;


if (!class_exists('TicketListShortcodeRest'))
{
  class TicketListShortcodeRest
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'ticket-list-rest', array(&$this, 'get_rest_ticketlist_shortcode' ) );
    }

    //--------------------------------------------------------
    // Display active Tickets
    //--------------------------------------------------------
    public function get_rest_ticketlist_shortcode($atts) {

      $is_manager = current_user_can( 'delete_others_posts' );

      //--------------------------------------------------------
      // Display Ticket List or Manager View Tickets
      //--------------------------------------------------------
      if ($is_manager) {

        global $fl_ticketlist_admin_rest;
        $fl_ticketlist_admin_rest = true;

        return '<div ng-app="ticketListAdmin" ng-controller="ticketListAdminCtrl" ng-include="templates_url + \'ticketListAdminTemplate.html\'" class="ticket-list"></div>';
      } else {

        global $fl_ticketlist_user_rest;
        $fl_ticketlist_user_rest = true;
        
        return '<div ng-app="ticketListUser" ng-controller="ticketListUserCtrl" ng-include="templates_url + \'ticketListUserTemplate.html\'" class="ticket-list"></div>';
      }

    }

  }
}









?>