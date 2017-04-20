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

  if(get_current_user_id() == 0)
    return html_login_info();

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

function html_login_info(){

  global $post;

  $html .= '<div id="message" class="message-box">';
    $html .= '<p>Du bist nicht eingeloggt!</p>';
    $html .= '<a href="' . get_bloginfo('wpurl') . '/login?redirect_to=' . get_permalink($post->ID) . '" style="margin-right:20px;">';
    $html .= '<input type="submit"  value="' . __('Login', 'fablab-ticket') . '"/></a>';
    $html .= '<a href="' . get_bloginfo('wpurl') . '/wp-login.php?action=register">';
    $html .= '<input type="submit"  value="' . __('Register', 'fablab-ticket') . '"/></a>';
  $html .= '</div>';

  return $html;
}





?>