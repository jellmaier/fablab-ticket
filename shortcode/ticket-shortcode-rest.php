<?php

//namespace fablab_ticket;

include 'ticket-shortcode-tickets.php';
include 'ticket-shortcode-timetickets.php';

if (!class_exists('TicketShortcodeRest'))
{
  class TicketShortcodeRest
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'user-ticket-rest', array(&$this, 'rest_ticket_shortcode') );
    }

    // Get Ticket Shortcut
    public function rest_ticket_shortcode($atts){
      global $post;

      global $fl_ticket_script;
      $fl_ticket_script = true;

      if(get_current_user_id() == 0) {
        $this->print_login_info();
        return;
      }
      
      $this->print_headder();
      $this->print_overlay_div();

      // Help overlay
      // new TicketShortcodeHelp();

      //--------------------------------------------------------
      // Check TAC
      //--------------------------------------------------------

      if(fablab_user_tac_acceptance()) {
        $this->print_tac_acception();
        return;
      } 

      // Display Ticket options

      $this->print_timeticket_list();

      $permission_needed = false; //(fablab_get_option('tickets_permission') == '1');

      $this->print_ticket_list($permission_needed);

     

    }

    //--------------------------------------------------------
    // HTML headder for message divs
    //--------------------------------------------------------

    private function print_headder(){

      ?>
      <div id="message-container"></div>
      <div class="busy" hidden></div>
      <?php
        
    }


    //--------------------------------------------------------
    // DIV for Ticket overlay
    //--------------------------------------------------------

    private function print_overlay_div(){

      ?>
      <div id="overlay-ticket" class="fl-overlay" hidden>
        <div id="device-ticket-box" class="device-ticket" hidden></div>
        <div class="fl-overlay-background"></div>
      </div>
      <?php
    }

    //--------------------------------------------------------
    // User not Logged in
    //--------------------------------------------------------

    private function print_login_info(){

      ?>
      <div id="message" class="message-box">
        <p>Du bist nicht eingeloggt!</br>
        Du kannst dich <a href="<?= bloginfo('url'); ?>/wp-login.php?redirect_to=<?= get_permalink($post->ID) ?>">hier</a>
        einloggen, oder <a href="<?= bloginfo('url'); ?>/wp-login.php?action=register">hier</a> registrieren!</p>
      </div>
      <?php
        
    }


    private function print_ticket_list($permission_needed){

      if ( $ticket_query->have_posts() && ($timeticket_count < $tickets_per_user)) {
        echo '<h2>' . $tickets_caption . '</h2>';
        $tickets->display_user_tickets($ticket_query);
      }

      // Display Tickets

      $html .= '<h2>Tickets</h2>'; // $tickets_caption 
      $html .= '<div ng-app="ticketListUser" ng-controller="ticketListUserCtrl" class="ticket-list">';
      $html .= '<p>Hier werden die wartende Personen angezeigt:</p>';
      $html .= '<div ng-repeat="ticket in tickets track by $index">';
        $html .= '<div class="fl-ticket-element" ng-class="{blink: ticket.available }"'; 
          $html .= 'style="border-left: 5px solid {{ticket.color}}" ng-init="loadTicketValues(ticket)" ';
          $html .= 'ng-show="ticket.completed" ng-cloak >';
          $html .= '<p>{{ ticket.post_date | date : "fullDate" }}<p>';
          $html .= '<h2>{{ ticket.post_title }}</h2>';
          $html .= '<p>für ' . fablab_get_captions('device_caption') . ': <b>{{ ticket.device_title }}</b></p>';
          //<?php if($calc_waiting_time) 
          //$html .= '<p>Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) </b></br>';
          //Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) </b></p>';
        $html .= '</div>';
      $html .= '</div>';
      $html .= '</div>';

  return $html;


    }


  }
}
  


?>