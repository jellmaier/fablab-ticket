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


  //--------------------------------------------------------
  // User not Logged in
  //--------------------------------------------------------
  if($user_id == 0) {
    ?>
    <div id="message" class="message-box">
      <p>Du bist nicht eingeloggt!</br>
      Du kannst dich <a href="<?= bloginfo('url'); ?>/wp-login.php?redirect_to=<?= get_permalink($post->ID) ?>">hier</a>
      einloggen, oder <a href="<?= bloginfo('url'); ?>/register/">hier</a> registrieren!</p>
    </div>
    <?php
    return;
  }

  //--------------------------------------------------------
  // Display Ticket options
  //--------------------------------------------------------

  echo '<div id="message" hidden class="message-box"></div>';

  $ticket_query = get_ticket_query_from_user($user_id);
  $instruction_query = get_instruction_query_from_user($user_id);

  if ( $ticket_query->have_posts() ) {
    display_user_tickets($ticket_query);
  } 

  $ticket_online = (fablab_get_option('ticket_online') == 1);
  $max_tickets = ($ticket_query->found_posts >= fablab_get_option('tickets_per_user'));
  $permission_needed = (fablab_get_option('tickets_permission') == '1');

  display_available_devices($ticket_online, $max_tickets, $permission_needed);

  if ( $instruction_query->have_posts() ) {
    display_user_instructions($instruction_query);
  } 
  display_available_instruction_devices($permission_needed);

}
    

//--------------------------------------------------------
// Display User Instruction
//--------------------------------------------------------
function display_user_instructions($ticket_query) {
  global $post;
  echo '<p>Hier wird dir deine Einschulungsanfragen angezeigt:</p>';
  echo '<div class="instruction-list">';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    $device_id = get_post_meta($post->ID, 'device_id', true );
    ?>
    <div class="fl-ticket-element instruction-element" style="border-top: 5px solid <?= $color ?>;"
      data-ticket-id="<?= $post->ID ?>"  data-user-id="<?=  $post->post_author ?>"
      <p><?= the_time('l, j. F, G:i') ?><p>
      <h2>Einschulungsanfrage</h2>
      <p>für Gerät: <b><?=  get_device_title_by_id($device_id); ?></b></p>
      <p>Nächster Termin: <b><?= next_instruction($device_id); ?></b></p>
      <input type="submit" class="ticket-btn delete-instruction" value="Einschulungsanfrage löschen"/>
    </div>
    <?php
  endwhile;
  echo '<div style="clear:left;"></div></div>';

  wp_reset_query();
}

//--------------------------------------------------------
// Display available Devices
//--------------------------------------------------------
function display_available_devices($ticket_online, $max_ticket, $permission_needed) {
  global $post;

  if(!$ticket_online){
    echo '<p class="device-message">Zurzeit können keine Tickets gezogen werden!</p>';
    return;
  }

  if($max_ticket){
    echo '<p class="device-message">Du hast die maximale Anzahl von Tickets gezogen!</p>';
    return;
  }

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
  $user_id = get_current_user_id();
  $devices_availabel = false;


  if ( !($device_query->have_posts()) ) {
    echo '<p class="device-message">Es sind keine Geräte online!</p>'; 
    wp_reset_query();
    return;
  }

  echo '<p>Hier werden dir die verfügbaren Geräte angezeigt:</p>';
  echo '<div id="fl-getticket" class="device-list">';
  while ( $device_query->have_posts() ) : $device_query->the_post() ;
    if ((get_user_meta($user_id, $post->ID, true ) || !$permission_needed)
        && !user_has_ticket($user_id, $post->ID, 'device')) {
      $waiting = get_waiting_time_and_persons($post->ID);
      $color = get_post_meta($post->ID, 'device_color', true );
      ?>
      <div class="fl-device-element get-ticket"  style="border: 6px solid <?= $color ?>; background-color: <?= $color ?>;"
        data-device-id="<?= $post->ID ?>" data-device-name="<?= get_device_title_by_id($post->ID) ?>">
        <div class="fl-device-element-content">
          <h2><?= $post->post_title ?></h2>
          <p id="waiting-time">Wartende Personen: <b><?= $waiting['persons'] ?>.</b></br>
          Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
        </div>
      </div>
      <?php
      $devices_availabel = true;
    }
  endwhile;
  echo '</div>';

  if (!$devices_availabel) {
    echo '<p class="device-message">Zurzeit kannst du keine Tickets ziehen!</p>';
    wp_reset_query();
    return;
  }

  wp_reset_query();

  // Display overlay get Ticket
  ?>
  <div id="overlay-get-ticket" class="fl-overlay" hidden>
    <div id="device-get-ticket-box" class="device-ticket" hidden action="" metod="POST">
      <a href="#" class="close">x</a>
      <h2>Ticket bestätigen</h2>
      <p id="get-ticket-device-name"></p>
      <input type="hidden" id="get-ticket-device-id" value="">
      <div id="get-ticket-device-content"></div>
      <p>Dauer: <select id="get-ticket-time-select"></select></p>
      <input type="submit" id="submit-ticket" class="button-primary" value="Ticket ziehen"/>
      <input type="submit" id="cancel-ticket" class="button-primary" value="Abbrechen"/>
    </div>
    <div id="overlay-background" class="fl-overlay-background"></div>
  </div>
  <?php
}


//--------------------------------------------------------
// Display available Devices
//--------------------------------------------------------
function display_available_instruction_devices($permission_needed) {

  if (!$permission_needed) {
    return;
  }

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
  $user_id = get_current_user_id();
  $devices_availabel = false;


  get_current_user_id();
  if ( $device_query->have_posts() ) {
    echo '<p>Hier werden dir die verfügbaren Geräte für Einschulungen angezeigt:</p>';
    echo '<div id="fl-getticket" class="device-list">';
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      if (!get_user_meta($user_id, $post->ID, true ) 
          && !user_has_ticket($user_id, $post->ID, 'instruction')) {
        ?>
        <div class="fl-device-element get-instruction" data-device-id="<?= $post->ID ?>" 
          data-device-name="<?= get_device_title_by_id($post->ID) ?>">
          <div class="fl-device-element-content">
            <h2><?= $post->post_title ?></h2>
            <p>Nächster Einschulungstermin: <b><?= next_instruction($post->ID); ?></b></p>
            <p>Ich möchte für dieses Gerät eine Einschulung</p>
          </div>
        </div>
        <?php
        $devices_availabel = true;
      }
    endwhile;
    if (!$devices_availabel) {
      echo '<p class="device-message">Keine Einschulungsanfragen verfügbar!</p>';
    }
    echo '</div>';
  } 

  wp_reset_query();
}


//--------------------------------------------------------
// Display User Tickets
//--------------------------------------------------------
function display_user_tickets($ticket_query) {
  global $post;
  echo '<p>Hier wird dir dein gezogenes Ticket angezeigt:</p>';
  echo '<div id="ticket-listing" class="ticket-list">';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    $device_id = get_post_meta($post->ID, 'device_id', true );
    (($post->post_status) == 'draft') ? $opacity = 0.6 : $opacity = 1;
    ($waiting['time'] == 0) ? $class = "fl-ticket-element blink" : $class = "fl-ticket-element";
    ?>
    <div class="<?= $class ?>" style="border-left: 5px solid <?= $color ?>; opacity: <?= $opacity ?>;"
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
  <div id="overlay-edit-ticket" class="fl-overlay" hidden>
    <div id="device-edit-ticket-box" class="device-ticket" hidden>
      <a href="#" class="close">x</a>
      <h2>Ticket bearbeiten</h2>
      <p>Gerät: <select id="edit-ticket-device-select"></select></p>
      <p id="edit-ticket-waiting-time"><p>
      <div id="edit-ticket-device-content"></div>
      <p>Dauer: <select id="edit-ticket-time-select"></select></p>
      <input type="submit" id="submit-change-ticket" class="button-primary" value="Ticket speichern"/>
      <input type="submit" id="delete-change-ticket" class="button-primary" value="Löschen"/>
      <input type="submit" id="cancel-change-ticket" class="button-primary" value="Abbrechen"/>
   </div>
   <div class="fl-overlay-background"></div>
  </div>
  <?php
}

?>