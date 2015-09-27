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
  $options = fablab_get_option();
  $tickets_per_user = $options['tickets_per_user'];

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
  } else {
    if ( $ticket_query->have_posts() ) {
      display_user_tickets($ticket_query);
    } 
    if ( $ticket_query->found_posts < $tickets_per_user ) {
      display_available_devices();
    }
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
    echo '<div id="message" hidden class="message-box"></div>';
    echo '<div id="fl-getticket">';
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      $waiting = get_waiting_time_and_persons($post->ID);
      $color = get_post_meta($post->ID, 'device_color', true );
      ?>
      <div class="fl-device-element get-ticket"  style="border: 6px solid <?= $color ?>; background-color: <?= $color ?>;"
        data-device-id="<?= $post->ID ?>" data-device-name="<?= get_device_title_by_id($post->ID) ?>">
        <div class="fl-device-element-content" data-device-id="<?= $post->ID ?>">
          <h2><?= $post->post_title ?></h2>
          <p id="waiting-time">Wartende Personen: <b><?= $waiting['persons'] ?>.</b></br>
          Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
        </div>
      </div>
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
      <a href="#" id="overlay-close" class="close">x</a>
      <h2>Ticket bestätigen</h2>
      <p id="device-name"></p>
      <input type="hidden" id="device-id" value="">
      <div id="device-content"></div>
      <p>Dauer: <select id="time-select"></select></p>
      <input type="submit" id="submit-ticket" class="button-primary" value="Ticket ziehen"/>
      <input type="submit" id="cancel-ticket" class="button-primary" value="Abbrechen"/>
    </div>
    <div id="overlay-background" class="fl-overlay-background"></div>
  </div>
  <?php
}


//--------------------------------------------------------
// Display User Tickets
//--------------------------------------------------------
function display_user_tickets($ticket_query) {
  global $post;
  echo '<p>Hier wird dir dein gezogenes Ticket angezeigt:</p>';
  echo '<div id="message" hidden class="message-box"></div>';
  echo '<div id="ticket-listing">';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    $device_id = get_post_meta($post->ID, 'device_id', true );
    if(($post->post_status) == 'draft') {
        $opacity = 0.6;
      } else {
        $opacity = 1;
    };
    ?>
    <div class="fl-ticket-element" style="border-left: 5px solid <?= $color ?>; opacity: <?= $opacity ?>;"
      data-ticket-id="<?= $post->ID ?>" data-device-id="<?=  $device_id ?>"
      data-duration="<?=  get_post_meta($post->ID, 'duration', true ) ?>"
      data-user-id="<?=  $post->post_author ?>" data-device-name="<?= get_device_title_by_id($device_id) ?>"
      data-user="<?=  get_user_by('id', $post->post_author)->display_name; ?>">
      <p><?= the_time('l, j. F, G:i') ?><p>
      <h2>Ticket</h2>
      <p>für Gerät: <b><?=  get_device_title_by_id(get_post_meta($post->ID, 'device_id', true )) ?>,</b> </br> 
      Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></p>
      <p id="waiting-time">Vor dir wartende Personen: <b><?= $waiting['persons'] ?>.</b></br>
      Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
      <?php
      if($opacity == 1) {
        echo '<input type="submit" class="ticket-btn edit-ticket" value="Ticket bearbeiten"/>';
      } else {
        echo '<p></br><b>Dein Ticket ist deaktiviert, bitte melde dich bei dem Manager!</b></p>';
      } 
      ?>
    </div>
    <?php
  endwhile;
  echo '</div>';

  wp_reset_query();
  
  // Display overlay change Ticket
  ?>
  <div id="overlay" class="fl-overlay" hidden>
    <div id="device-ticket-box" class="device-ticket" hidden>
      <a href="#" id="overlay-close" class="close">x</a>
      <h2>Ticket bearbeiten</h2>
      <p>Gerät: <select id="device-select"></select></p>
      <p id="waiting-time"><p>
      <div id="device-content"></div>
      <p>Dauer: <select id="time-select"></select></p>
      <input type="submit" id="submit-change-ticket" class="button-primary" value="Ticket speichern"/>
      <input type="submit" id="delete-change-ticket" class="button-primary" value="Löschen"/>
      <input type="submit" id="cancel-change-ticket" class="button-primary" value="Abbrechen"/>
   </div>
   <div id="overlay-background" class="fl-overlay-background"></div>
  </div>
  <?php
}

?>