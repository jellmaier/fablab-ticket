<?php

//namespace fablab_ticket;


if (!class_exists('TicketShortcodeRest'))
{
  class TicketShortcodeRest
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'ticket-user-rest', array(&$this, 'get_rest_ticket_shortcode' ) );

    }

    //--------------------------------------------------------
    // Display active Tickets
    //--------------------------------------------------------
    public function get_rest_ticket_shortcode($atts) {

      if(!is_user_logged_in())
        return $this->html_login_info();

      //--------------------------------------------------------
      // Display Tickets and Devices from Current User
      //--------------------------------------------------------

      global $fl_ui_leaflet;
      $fl_ui_leaflet = true;

      global $fl_ticket_user_rest;
      $fl_ticket_user_rest = true;

      return '<div ng-app="ticketUser" ng-controller="ticketUserCtrl" ng-include="templates_url + \'ticketUserTemplate.html\'"></div>';
      
    }

    private function html_login_info(){

      global $post;

      $html .= '<div id="message" class="message-box">';
        $html .= '<p>Du bist nicht eingeloggt!</p>';
        $html .= '<a href="' . get_bloginfo('wpurl') . '/login?redirect_to=' . get_permalink($post->ID) . '" style="margin-right:20px;">';
        $html .= '<input type="submit"  value="' . __('Login', 'fablab-ticket') . '"/></a>';
        $html .= '<a href="' . get_bloginfo('wpurl') . '/wp-login.php?action=register">';
        $html .= '<input type="submit"  value="' . __('Register', 'fablab-ticket') . '"/></a>';
        if (fablab_get_option('login_with_nfc') == '1')
          $html .= $this->html_nfc_login();
      $html .= '</div>';

      return $html;
    }

    //--------------------------------------------------------
    // HTML Login Overlay
    //--------------------------------------------------------

    private function html_nfc_login(){

      global $nfc_login_script; // script loader
      $nfc_login_script = true;
      return '<div ng-app="nfcLogin" ng-controller="nfcLoginCtrl" ng-include="templates_url + \'nfcLoginTemplate.html\'"></div>';
        
    }

  }
}


?>