<?php

//namespace fablab_ticket;

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
  $ticket_query = get_ticket_query_from_user($user_id);
  //count_user_posts(uid, posttype);

  if($user_id == 0) {
      //--------------------------------------------------------
      // Display not Logged in
      //--------------------------------------------------------
    ?>
    <div id="message" class="message-box">
      <p>Du bist nicht eingeloggt!</br>
      Du kannst dich <a href="<?= bloginfo('url'); ?>/wp-login.php?redirect_to=<?= get_permalink($post->ID) ?>">hier</a>
      einloggen, oder <a href="<?= bloginfo('url'); ?>/register/">hier</a> registrieren!</p>
    </div>
    <?php
  } else if ( $ticket_query->have_posts() ) {
    display_user_tickets($ticket_query);
  } else {
    display_available_devices();
  }
}
    

//--------------------------------------------------------
// Display available Devices
//--------------------------------------------------------
function display_available_devices() {
  global $post;
  $query_arg = array(
    'post_type' => 'device',
    'meta_query' => array(   
      'relation'=> 'OR',               
      array(
        'key' => 'device_status',                  
        'value' => 'online',               
        'compare' => '='                 
      )
    ) 
  );
  $device_query = new WP_Query($query_arg);
  if ( $device_query->have_posts() ) {
    echo '<p>Hier werden dir die verfügbaren Geräte angezeigt:</p>';
    echo '<div id="fl-getticket" action="" metod="POST">';
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      $waiting = get_waiting_time_and_persons($post->ID);
      $color = get_post_meta($post->ID, 'device_color', true );
      ?>
      <a href="#" data-name="<?= $post->ID ?>">
        <div class="fl-device-element"  style="border: 6px solid <?= $color ?>; background-color: <?= $color ?>;">
          <div class="fl-device-element-content">
            <h2><?= $post->post_title ?></h2>
            <p id="waiting-time">Wartende Personen: <b><?= $waiting['persons'] ?>.</b></br>
            Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
            <input type="hidden" name="device-id" value="<?= the_ID(); ?>">
          </div>
        </div>
      </a>
      <?php
    endwhile;
    echo '</div>';
  } else {
      echo '<p> No device online! </p>'; 
  }

  wp_reset_query();

  // Display overlay get Ticket
  ?>
  <div id="overlay" class="fl-overlay" hidden>
    <div id="device-ticket-box" class="device-ticket" hidden action="" metod="POST">
      <h2>Ticket bestätigen</h2>
      <p id="device-name"></p>
      <input type="hidden" id="device-id" value="">
      <div id="device-content"></div>
      <p></p>
      <p>Dauer: <select id="time-select"></select></p>
      <input type="submit" id="submit-ticket" class="button-primary" value="Ticket ziehen"/>
      <input type="submit" id="cancel-ticket" class="button-primary" value="Abbrechen"/>
    </div>
  </div>
  <div id="message" hidden class="message-box"></div>
  <?php
}


//--------------------------------------------------------
// Display User Tickets
//--------------------------------------------------------
function display_user_tickets($ticket_query) {
  global $post;
  echo '<p>Hier wird dir dein gezogenes Ticket angezeigt:</p>';
  echo '<div id="ticket-listing" action="" metod="POST">';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    ?>
    <a href="#" data-name="<?= $post->ID ?>">
    <div class="fl-ticket-element" style="border-left: 5px solid <?= $color ?>;">
      <p><?= the_time('l, j. F, G:i') ?><p>
      <h2>Ticket</h2>
      <p>für Gerät: <b><?=  get_device_title_by_id(get_post_meta($post->ID, 'device_id', true )) ?>,</b> </br> 
      Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></p>
      <p id="waiting-time">Vor dir wartende Personen: <b><?= $waiting['persons'] ?>.</b></br>
      Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
      <input type="hidden" id="ticket-device-id" value="<?=  get_post_meta($post->ID, 'device_id', true ) ?>">
      <input type="hidden" id="ticket-duration" value="<?=  get_post_meta($post->ID, 'duration', true ) ?>">
      <input type="hidden" id="ticket-id" value="<?=  $post->ID ?>">
      <input type="submit" name="<?=  $post->post_title ?>" id="<?=  $post->post_title ?>" class="ticket-btn" value="Ticket bearbeiten"/>
    </div>
    </a>
    <?php
  endwhile;
  echo '</div>';

  wp_reset_query();
  
  // Display overlay change Ticket
  ?>
  <div id="overlay" class="fl-overlay" hidden>
    <div id="device-ticket-box" class="device-ticket" hidden action="" metod="POST">
      <h2>Ticket bearbeiten</h2>
      <p>Gerät: <select id="device-select"></select></p>
      <p id="waiting-time"><p>
      <input type="hidden" id="device-id" value="">
      <div id="device-content"></div>
      <p></p>
      <p>Dauer: <select id="time-select"></select></p>
      <input type="submit" id="submit-change-ticket" class="button-primary" value="Ticket speichern"/>
      <input type="submit" id="delete-change-ticket" class="button-primary" value="Löschen"/>
      <input type="submit" id="cancel-change-ticket" class="button-primary" value="Abbrechen"/>
   </div>
  </div>
  <div id="message" hidden class="message-box"></div>

  <?php
}

?>