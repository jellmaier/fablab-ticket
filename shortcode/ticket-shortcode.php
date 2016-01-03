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
      add_shortcode( 'user-ticket', 'get_ticket_shortcode' );
    }
  }
}

// Get Ticket Shortcut
function get_ticket_shortcode($atts){
  global $post;

  global $fl_ticket_script;
  $fl_ticket_script = true;
  $user_id = get_current_user_id();


  //--------------------------------------------------------
  // User not Logged in
  //--------------------------------------------------------
  if($user_id == 0) {
    ?>
    <div id="message" class="message-box">
      <p>Du bist nicht eingeloggt!</br>
      Du kannst dich <a href="<?= bloginfo('url'); ?>/wp-login.php?redirect_to=<?= get_permalink($post->ID) ?>">hier</a>
      einloggen, oder <a href="<?= bloginfo('url'); ?>/wp-login.php?action=register">hier</a> registrieren!</p>
    </div>
    <?php
    return;
  }


  $permission_needed = (fablab_get_option('tickets_permission') == '1');

  ?>
  <div id="message-container"></div>
  <div class="busy" hidden></div>
  <?php

  new TicketShortcodeHelp();

  //--------------------------------------------------------
  // Check TAC
  //--------------------------------------------------------
  $tac_options = fablab_get_tac();

  $tac_acceptance_date = get_user_meta($user_id, 'tac_acceptance_date', true);

  $agb_page = get_post( $tac_options['tac_pageid'], ARRAY_A );
  $content = apply_filters ("the_content", $agb_page['post_content']);

  if(fablab_user_tac_acceptance()) {
    ?>
    <div id="tac-message" class="message-box">
      <p class="tac-toggle">Um ein Gerät zu nutzen, bitte den AGBs zustimmen! <a id="tac-show">Anzeigen</a></p>    
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
  } else {
    //--------------------------------------------------------
    // Display Ticket options
    //--------------------------------------------------------

    $ticket_query = get_ticket_query_from_user($user_id);
    $timeticket_query = get_active_user_ticket($user_id);

    new TicketShortcodeTimeticket($timeticket_query);

    //print_active_user_timetickets($timeticket_query);

    $ticket_online = (fablab_get_option('ticket_online') == 1);
    
    $ticket_count = $ticket_query->found_posts;
    $timeticket_count = $timeticket_query->found_posts;
    $tickets_per_user = fablab_get_option('tickets_per_user');
    $max_tickets = (($ticket_count + $timeticket_count) >= $tickets_per_user);
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
      $tickets->display_available_devices($permission_needed);
    } else {
      echo '<p class="device-message">Du hast die maximale Anzahl von ' . $tickets_caption . ' gezogen!</p>';
    }

  }

  $instuctions = new TicketShortcodeInstructions();
  $instruction_query = get_instruction_query_from_user($user_id);

  echo '<h2>' . fablab_get_captions('instruction_requests_caption') . '</h2>';
  if ( $instruction_query->have_posts() ) {
    $instuctions->display_user_instructions($instruction_query);
  } 
  if ($permission_needed) {
    $instuctions->display_available_instruction_devices();
  }

}




?>