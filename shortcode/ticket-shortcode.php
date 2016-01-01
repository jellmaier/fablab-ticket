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
      einloggen, oder <a href="<?= bloginfo('url'); ?>/wp-login.php?action=register">hier</a> registrieren!</p>
    </div>
    <?php
    return;
  }


  //--------------------------------------------------------
  // Display Ticket options
  //--------------------------------------------------------

  ?>
  <div id="message-container"></div>
  <div class="busy" hidden></div>
  <?php

  print_user_help();

  $ticket_query = get_ticket_query_from_user($user_id);
  $instruction_query = get_instruction_query_from_user($user_id);
  $timeticket_query = get_active_user_ticket($user_id);

  

  print_active_user_timetickets($timeticket_query);

  $ticket_online = (fablab_get_option('ticket_online') == 1);
  $permission_needed = (fablab_get_option('tickets_permission') == '1');
  $ticket_count = $ticket_query->found_posts;
  $timeticket_count = $timeticket_query->found_posts;
  $tickets_per_user = fablab_get_option('tickets_per_user');
  $max_tickets = (($ticket_count + $timeticket_count) >= $tickets_per_user);
  $ticket_caption = fablab_get_captions('ticket_caption');
  $tickets_caption = fablab_get_captions('tickets_caption');

  if ( $ticket_query->have_posts() && ($timeticket_count < $tickets_per_user)) {
    echo '<h2>' . $tickets_caption . '</h2>';
    display_user_tickets($ticket_query);
  }

  echo '<h2>' . fablab_get_captions('devices_caption') . '</h2>';
  if (!$ticket_online) {
    echo '<p class="device-message">Zurzeit können keine ' . $tickets_caption . ' gezogen werden!</p>';
  } else if ( !$max_tickets ) {
    display_available_devices($permission_needed);
  } else {
    echo '<p class="device-message">Du hast die maximale Anzahl von ' . $tickets_caption . ' gezogen!</p>';
  }

  echo '<h2>' . fablab_get_captions('instruction_requests_caption') . '</h2>';
  if ( $instruction_query->have_posts() ) {
    display_user_instructions($instruction_query);
  } 
  if ($permission_needed) {
    display_available_instruction_devices();
  }

}


//--------------------------------------------------------
// Display User Help
//--------------------------------------------------------
function print_user_help() { 
  $devices = get_online_devices();
  $user_id = get_current_user_id();
  $show = true;

  foreach ($devices as $device) {
    if(get_user_meta($user_id, $device['id'], true )) {
      $show = false;
    }
  }
  $ticket_caption = fablab_get_captions('ticket_caption');
  $tickets_caption = fablab_get_captions('tickets_caption');
  $device_caption = fablab_get_captions('device_caption');
  $devices_caption = fablab_get_captions('devices_caption');

  ?>
  <div class="help-container">

    <input type="submit" class="help-button" value="Erste Schritte" />

    <div class="help-box" <?= $show ? "" :  "hidden"; ?> >
      <div><p class="help-headder">1. <?= fablab_get_captions('instruction_caption') ?></p>
      <div class="help-content" hidden>
      <p><?= $devices_caption ?> für die du noch nicht eingeschult wurdest, werden grau angezeigt.</p>
      <ol>
        <li>Stelle eine <?= fablab_get_captions('instruction_request_caption') ?> für dein gewünschtes <?= $device_caption ?></li>
        <li>Komm zu einer <?= fablab_get_captions('instruction_caption') ?></li>
      </ol>
      </div></div>
      <div><p class="help-headder">2. Zugang zu einem <?= $device_caption ?></p>
      <div class="help-content" hidden>
      <p>Für dich verfügbare <?= $devices_caption ?> werden farbig angezeigt.</p>
      <ol>
        <li>Gewünschtes <?= $device_caption ?> auswählen</li>
        <li>Benutzungsdauer auswählen</li>
        <li><?= $ticket_caption ?> ziehen</li>
      </ol>
      </div></div>
      <div><p class="help-headder">3. <?= $ticket_caption ?> ändern</p>
      <div class="help-content" hidden>
      <p>Gezogene <?= $tickets_caption ?> werden unter <?php $tickets_caption ?> angezeigt.</p>
      <ol>
        <li><?= $ticket_caption ?> bearbeiten klicken</li>
        <li><?= $device_caption ?> oder Dauer ändern</li>
        <li><?= $ticket_caption ?> speichern</li>
      </ol>
      </div></div>
      <div><p class="help-headder">4. Du bist an der Reihe</p>
      <div class="help-content" hidden>
      <p>Wenn dein gewünschtes <?= $device_caption ?> verfügbar ist (<?= $ticket_caption ?> blinkt), 
        melde dich bei dem Manager, er wird dir dein <?= $device_caption ?> zuweisen.</p>
      </div></div>
      <div><p class="help-headder">5. <?= $device_caption ?> benutzen</p>
      <div class="help-content" hidden>
      <p>Wenn dir ein <?= $device_caption ?> zugewiesen wurde, wird dir ein <?= fablab_get_captions('time_ticket_caption') ?> angezeigt.</p>
      <ul>
        <li>Du bist früher fertig: <b>"Jetzt Beenden"</b> klicken.</li>
        <li>Du brauchst länger: <b>"+30 Minuten"</b> klicken. (Maximale Benutzungsdauer: 2h)</li>
      </ul>
      </div></div>
    </div>
  </div>
  <?php

}

//--------------------------------------------------------
// Display active Timeticket
//--------------------------------------------------------
function print_active_user_timetickets($ticket_query) {
  global $post;

  if ( $ticket_query->have_posts() ) {
    echo '<div id="time-ticket-listing">';
    echo '<h2>' . fablab_get_captions('time_ticket_caption') . '</h2>';
    echo '<p>Hier wird dir dein aktives ' . fablab_get_captions('time_ticket_caption') . ' angezeigt:</p>';
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
      $device_id = get_post_meta($post->ID, 'timeticket_device', true );
      $color = get_post_meta($device_id, 'device_color', true );
      ?>
      <div class="fl-ticket-element" style="border: 4px solid <?= $color ?>;"
        data-user="<?= get_user_by('id', get_post_meta($post->ID, 'timeticket_user', true ))->display_name ?>"
        data-time-ticket-id="<?= $post->ID ?>">
        <p><?= fablab_get_captions('device_caption') ?> : <b><?=  get_device_title_by_id($device_id) ?></b> </p> 
        <h2><?= $post->post_title ?></h2>
        <p>Start Zeit: <b><?=  get_timediff_string(get_post_meta($post->ID, 'timeticket_start_time', true )) ?></b></p>
        <p>End Zeit: <b><?=  get_timediff_string(get_post_meta($post->ID, 'timeticket_end_time', true )) ?></b></p>
        <input type="submit" class="ticket-btn stop-time-ticket" value="Jetzt Beenden"/>
        <input type="submit" data-minutes="30" class="ticket-btn extend-time-ticket" value="+30 Minuten"/>
      </div>
      <?php
    endwhile;
    echo '<div>';
  }

  wp_reset_query();
}   

//--------------------------------------------------------
// Display User Instruction
//--------------------------------------------------------
function display_user_instructions($ticket_query) {
  global $post;
  if ( $ticket_query->have_posts() ) {
  echo '<div class="instruction-list">';
  echo '<p>Hier werden dir deine ' . fablab_get_captions('instruction_requests_caption') . ' angezeigt:</p>';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    $device_id = get_post_meta($post->ID, 'device_id', true );
    ?>
    <div class="fl-ticket-element instruction-element" style="border-top: 5px solid <?= $color ?>;"
      data-ticket-id="<?= $post->ID ?>"  data-user-id="<?=  $post->post_author ?>"
      <p><?= the_time('l, j. F, G:i') ?><p>
      <h2><?= fablab_get_captions('instruction_request_caption') ?></h2>
      <p>für <?= fablab_get_captions('device_caption') ?> : <b><?=  get_device_title_by_id($device_id); ?></b></p>
      <p>Nächster Termin: <b><?= next_instruction($device_id); ?></b></p>
      <input type="submit" class="ticket-btn delete-instruction" value="<?= fablab_get_captions('instruction_caption') ?>sanfrage löschen"/>
    </div>
    <?php
  endwhile;
  echo '<div style="clear:left;"></div></div>';
}

  wp_reset_query();
}

//--------------------------------------------------------
// Display available Devices
//--------------------------------------------------------
function display_available_devices($permission_needed) {
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


  if ( !($device_query->have_posts()) ) {
    echo '<p class="device-message">Es sind keine ' . fablab_get_captions('devices_caption') . ' online!</p>'; 
    wp_reset_query();
    return;
  }

  echo '<p>Hier werden dir die verfügbaren ' . fablab_get_captions('devices_caption') . ' angezeigt:</p>';
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
          <p id="waiting-time">Wartende Personen: <b><?= $waiting['persons'] ?></b></br>
          Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?></b></p>
        </div>
      </div>
      <?php
      $devices_availabel = true;
    }
  endwhile;
  echo '</div>';

  if (!$devices_availabel) {
    echo '<p class="device-message">Zurzeit kannst du keine ' . fablab_get_captions('ticket_caption') . 's ziehen!</p>';
    wp_reset_query();
    return;
  }

  wp_reset_query();

  // Display overlay get Ticket
  ?>
  <div id="overlay-get-ticket" class="fl-overlay" hidden>
    <div id="device-get-ticket-box" class="device-ticket" hidden action="" metod="POST">
      <a href="#" class="close">x</a>
      <h2><?= fablab_get_captions('ticket_caption') ?> bestätigen</h2>
      <p id="get-ticket-device-name"></p>
      <input type="hidden" id="get-ticket-device-id" value="">
      <div id="get-ticket-device-content"></div>
      <p>Dauer: <select id="get-ticket-time-select"></select></p>
      <input type="submit" id="submit-ticket" class="button-primary" value="<?= fablab_get_captions('ticket_caption') ?> ziehen"/>
      <input type="submit" id="cancel-ticket" class="button-primary" value="Abbrechen"/>
    </div>
    <div id="overlay-background" class="fl-overlay-background"></div>
  </div>
  <?php
}


//--------------------------------------------------------
// Display available Devices
//--------------------------------------------------------
function display_available_instruction_devices() {

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
    echo '<p>Hier werden dir die verfügbaren ' . fablab_get_captions('devices_caption') . 
            ' für ' . fablab_get_captions('instructions_caption') . ' angezeigt:</p>';
    echo '<div id="fl-getticket" class="device-list">';
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      if (!get_user_meta($user_id, $post->ID, true ) 
          && !user_has_ticket($user_id, $post->ID, 'instruction')) {
        ?>
        <div class="fl-device-element get-instruction" data-device-id="<?= $post->ID ?>" 
          data-device-name="<?= get_device_title_by_id($post->ID) ?>">
          <div class="fl-device-element-content">
            <h2><?= $post->post_title ?></h2>
            <p>Nächste <?= fablab_get_captions('instruction_caption') ?>: <b><?= next_instruction($post->ID); ?></b></p>
            <p>Ich möchte für dieses <?= fablab_get_captions('device_caption') ?>  eine <?= fablab_get_captions('instruction_caption') ?></p>
          </div>
        </div>
        <?php
        $devices_availabel = true;
      }
    endwhile;
    if (!$devices_availabel) {
      echo '<p class="device-message">Keine ' . fablab_get_captions('instruction_requests_caption') . ' verfügbar!</p>';
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
  echo '<p>Hier wird dir dein gezogenes ' . fablab_get_captions('ticket_caption') . ' angezeigt:</p>';
  echo '<div id="ticket-listing" class="ticket-list">';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    $device_id = get_post_meta($post->ID, 'device_id', true );
    (($post->post_status) == 'draft') ? $opacity = 0.6 : $opacity = 1;
    ($waiting['time'] == 0) ? $class = "fl-ticket-element blink" : $class = "fl-ticket-element";
    if((get_post_meta($post->ID, 'activation_time', true ) == 'not set') || $opacity == 1) {
      ?>
      <div class="<?= $class ?>" style="border-left: 5px solid <?= $color ?>; opacity: <?= $opacity ?>;"
        data-ticket-id="<?= $post->ID ?>" data-device-id="<?=  $device_id ?>"
        data-duration="<?=  get_post_meta($post->ID, 'duration', true ) ?>"
        data-user-id="<?=  $post->post_author ?>" data-device-name="<?= get_device_title_by_id($device_id) ?>"
        data-user="<?=  get_user_by('id', $post->post_author)->display_name; ?>">
        <p><?= the_time('l, j. F, G:i') ?><p>
        <h2><?= fablab_get_captions('ticket_caption') ?></h2>
        <p>für <?= fablab_get_captions('device_caption') ?> : <b><?=  get_device_title_by_id(get_post_meta($post->ID, 'device_id', true )) ?></b> </br> 
        Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></p>
        <p id="waiting-time">Vor dir wartende Personen: <b><?= $waiting['persons'] ?></b></br>
        Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?></b></p>
        <?php
        if($opacity == 1) {
          echo '<input type="submit" class="ticket-btn edit-ticket" value="' . fablab_get_captions('ticket_caption') . ' bearbeiten"/>';
        } else {
          echo '<p></br><b>Dein ' . fablab_get_captions('ticket_caption') . ' ist deaktiviert, bitte melde dich bei dem Manager!</b></p>';
        } 
        ?>
      </div>
      <?php
    }
  endwhile;
  echo '</div>';

  wp_reset_query();
  
  // Display overlay change Ticket
  ?>
  <div id="overlay-edit-ticket" class="fl-overlay" hidden>
    <div id="device-edit-ticket-box" class="device-ticket" hidden>
      <a href="#" class="close">x</a>
      <h2><?= fablab_get_captions('ticket_caption') ?> bearbeiten</h2>
      <p><?= fablab_get_captions('device_caption') ?> : <select id="edit-ticket-device-select"></select></p>
      <p id="edit-ticket-waiting-time"><p>
      <div id="edit-ticket-device-content"></div>
      <p>Dauer: <select id="edit-ticket-time-select"></select></p>
      <input type="submit" id="submit-change-ticket" class="button-primary" value="<?= fablab_get_captions('ticket_caption') ?> speichern"/>
      <input type="submit" id="delete-change-ticket" class="button-primary" value="Löschen"/>
      <input type="submit" id="cancel-change-ticket" class="button-primary" value="Abbrechen"/>
   </div>
   <div class="fl-overlay-background"></div>
  </div>
  <?php
}

?>