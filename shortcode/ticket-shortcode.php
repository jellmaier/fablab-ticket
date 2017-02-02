<?php

//namespace fablab_ticket;

include 'ticket-shortcode-help.php';
include 'ticket-shortcode-instructions.php';
include 'ticket-shortcode-tickets.php';
include 'ticket-shortcode-timetickets.php';

if (!class_exists('TicketShortcode'))
{
  class TicketShortcode
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'user-ticket', array(&$this, 'get_ticket_shortcode') );
    }

    // Get Ticket Shortcut
    public function get_ticket_shortcode($atts){
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

      $permission_needed = (fablab_get_option('tickets_permission') == '1');

      $this->print_ticket_list($permission_needed);

      if ($permission_needed)
         $this->print_ticket_instructions();

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

    //--------------------------------------------------------
    // Check TAC
    //--------------------------------------------------------

    private function print_timeticket_list(){

      $timeticket_query = get_active_user_ticket(get_current_user_id());
      new TicketShortcodeTimeticket($timeticket_query);
    }


    private function print_ticket_list($permission_needed){

      $ticket_online = (fablab_get_option('ticket_online') == 1);

      $ticket_query = get_ticket_query_from_user(get_current_user_id());
      
      $ticket_count = $ticket_query->found_posts;
      $tickets_per_user = fablab_get_option('tickets_per_user');
      //$timeticket_count = $timeticket_query->found_posts;
      //$max_tickets = (($ticket_count + $timeticket_count) >= $tickets_per_user);
      $max_tickets = ($ticket_count >= $tickets_per_user);
      $ticket_caption = fablab_get_captions('ticket_caption');
      $tickets_caption = fablab_get_captions('tickets_caption');

      $tickets = new TicketShortcodeTicket();

      if ( $ticket_query->have_posts() && ($timeticket_count < $tickets_per_user)) {
        echo '<h2>' . $tickets_caption . '</h2>';
        $tickets->display_user_tickets($ticket_query);
      }

      echo '<h2>' . fablab_get_captions('devices_caption') . '</h2>';
      if (!$ticket_online) {
        echo '<p class="device-message">Zurzeit können keine ' . $tickets_caption . ' gezogen werden!</p>';
      } else if ( !$max_tickets ) {
        $tickets->display_available_dtypes($permission_needed);
        /*
        echo '<div class="device-list-box">';
        echo '<div class="device-toggle" style="border-left: 4px solid #555"><p><b>PRO Devices</b></p></div>';

        echo '<div class="device-dropdown" hidden>';
        echo '<div class="device-listing">';
        $tickets->display_available_devices($permission_needed);
        echo '</div>';
        echo '<div class="device-close"><p><b>x</b> Schließen</br></p></div>';
        echo '</div></div>';
        */
      } else {
        echo '<p class="device-message">Du hast die maximale Anzahl von ' . $tickets_caption . ' gezogen!</p>';
      }
    }

    //--------------------------------------------------------
    // Check TAC
    //--------------------------------------------------------

    private function print_tac_acception(){

      $tac_options = fablab_get_tac();      
      $agb_page = get_post( $tac_options['tac_pageid'], ARRAY_A );
      $content = apply_filters ("the_content", $agb_page['post_content']);

      //__('Um ein Gerät zu nutzen, bitte den AGBs zustimmen!', 'fablab-ticket') 

      ?>
      <div id="tac-message" class="message-box">
        <p class="tac-toggle">Um ein Gerät zu nutzen, bitte den AGBs zustimmen!<a id="tac-show">Anzeigen</a></p>    
      </div>
      <?php 
      echo '<div id="tac-content" hidden class="tac-box">';
      if(!empty($content)) {
        echo $content;
        echo '<input type="submit" id="accept-tac" class="button-primary" value="Zustimmen"/>';
        echo '<input type="submit" id="cancel-tac" class="button-primary" value="Abbrechen"/>';
      } else {
        echo '<p>Keine AGBs vorhanden!</br>Bitte kontaktiere den Administrator!</p>';
      }
      echo '</div>';

    }

    //--------------------------------------------------------
    // Print Instruckion Displays
    //--------------------------------------------------------

    private function print_ticket_instructions(){

      $instuctions = new TicketShortcodeInstructions();
      $instruction_query = get_instruction_query_from_user($user_id);

      echo '<h2>' . fablab_get_captions('instruction_requests_caption') . '</h2>';
      if ( $instruction_query->have_posts() ) {
        $instuctions->display_user_instructions($instruction_query);
      } 
      
      $instuctions->display_available_instruction_devices();

    }


  }
}
  


?>