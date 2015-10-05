<?php

//namespace fablab_ticket;

if (!class_exists('TicketListShortcode'))
{
  class TicketListShortcode
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'ticket-list', 'get_ticketlist_shortcode' );
    }
  }
}

// Get Ticket Shortcut
function get_ticketlist_shortcode($atts){

  global $post;
  $is_manager = current_user_can( 'delete_others_posts' );

  //--------------------------------------------------------
  // Display Ticket List
  //--------------------------------------------------------
  if ($is_manager) {
    display_manager_ticketlist();
  } else {
    display_ticketlist();
  }

  echo '<div id="overlay-background" class="fl-overlay-background" hidden></div>';
  
}

//--------------------------------------------------------
// Display Tickets
//--------------------------------------------------------
function display_ticketlist() {

  global $fl_ticketlist_script;
  $fl_ticketlist_script = true;

    $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => 'date', 
    'order' => 'ASC',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'device',
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);

  global $post;
  echo '<p>Hier werden dir die aktiven Tickets angezeigt:</p>';
  if ($ticket_query->have_posts()) {
    echo '<META HTTP-EQUIV="refresh" CONTENT="10">';
  } else if(fablab_get_option('ticket_online') == 1) {
    echo '<META HTTP-EQUIV="refresh" CONTENT="60">';
  }
  echo '<div id="ticket-listing">';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    $available = ($waiting['time'] == 0);
    ?>
    <div class="<?= $available ? "fl-ticket-element blink" :  "fl-ticket-element"; ?>" 
      style="border-left: 5px solid <?= $color ?>;">
      <p><?= the_time('l, j. F, G:i') ?><p>
      <h2><?= $post->post_title ?></h2>
      <p>für Gerät: <b><?=  get_device_title_by_id(get_post_meta($post->ID, 'device_id', true )) ?>,</b> </br> 
      Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></br>
      Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
    </div>
    <?php
  endwhile;
  echo '</div>';

  wp_reset_query();

}


//--------------------------------------------------------
// Display Manager View Tickets
//--------------------------------------------------------
function display_manager_ticketlist() {
  global $post;
  
  global $fl_ticketlist_script;
  $fl_ticketlist_script = true;

  ?>
  <p>Hier werden dir die aktiven Tickets angezeigt:</p>
  <div id="message" hidden class="message-box"></div>
  <div class="reload">
    <?php 
    if(fablab_get_option('ticket_online') == 1){
      echo '<a style="text-decoration: none; margin-right: 10px;" id="disable-ticketing" href="#">Disable Ticketing</a>';
    } else {
      echo '<a style="text-decoration: none; margin-right: 10px;" id="enable-ticketing" href="#">Enable Ticketing</a>';
    }
    ?>
    <a style="text-decoration: none;" href="javascript:location.reload();" >&#8634 Reload</a>
  </div>
  <?php

  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => 'date', 
    'order' => 'ASC',
    'post_status' => 'draft',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'device',
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  echo '<div class="draft-box">';
  echo '<div ><p class="draft-toggle"><b>Deaktivierte Tickets</b></p></div>';
  echo '<div id="draft-ticket-listing" hidden>';
  if ( $ticket_query->have_posts() ) {
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
      $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
      $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
      $device_id = get_post_meta($post->ID, 'device_id', true );
      delete_activation_time($post->ID); // just in case it gets activated again
      ?>
      <div class="fl-ticket-element" data-ticket-id="<?= $post->ID ?>" style="border-left: 5px solid <?= $color ?>; opacity: 0.5;"
        data-ticket-id="<?= $post->ID ?>" data-device-id="<?=  $device_id ?>"
        data-duration="<?=  get_post_meta($post->ID, 'duration', true ) ?>"
        data-user-id="<?=  $post->post_author ?>" data-device-name="<?= get_device_title_by_id($device_id) ?>"
        data-user="<?=  get_user_by('id', $post->post_author)->display_name; ?>" >
        <p><?= the_time('l, j. F, G:i') ?><p>
        <h2><?= $post->post_title ?></h2>
        <p>für Gerät: <b><?=  get_device_title_by_id($device_id) ?>,</b> </br> 
        Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></br>
        Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
        <input type="submit" class="ticket-btn assign-ticket" value="Ticket zuweisen"/>
        <input type="submit" class="ticket-btn activate-ticket" value="Ticket aktivieren"/>
        <input type="submit" class="ticket-btn delete-ticket" value="Ticket löschen"/>
      </div>
      <?php
    endwhile;
  } else {
    echo '<p style="margin: 10px;"> No Tickets! </p>'; 
  }
  echo '<div ><p class="draft-toggle"><b>x</b> Schließen</br></p></div>';
  echo '</div></div>';

  wp_reset_query();

  $query_arg = array(
    'post_type' => 'timeticket',
    'posts_per_page' => 10, 
    'orderby' => 'date', 
    'order' => 'ASC',
    'meta_query'=>array(
    'relation'=>'and',
      array(
          'key'=>'timeticket_start_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '<'
      ),
      array(
          'key'=>'timeticket_end_time',
          'value'=> current_time( 'timestamp' ),
          'compare' => '>'
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  echo '<div class="time-ticket-box">';
  echo '<div ><p class="time-ticket-toggle"><b>Aktive Time-Tickets</b></p></div>';
  echo '<div id="time-ticket-listing" hidden>';
  if ( $ticket_query->have_posts() ) {
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
      $device_id = get_post_meta($post->ID, 'timeticket_device', true );
      $color = get_post_meta($device_id, 'device_color', true );
      ?>
      <div class="fl-ticket-element" style="border: 5px solid <?= $color ?>;"
        data-user="<?= get_user_by('id', get_post_meta($post->ID, 'timeticket_user', true ))->display_name ?>"
        data-time-ticket-id="<?= $post->ID ?>">
        <p>Gerät: <b><?=  get_device_title_by_id($device_id) ?></b> </p> 
        <h2><?= $post->post_title ?></h2>
        <p>Start Zeit vor: <b><?=  human_time_diff(get_post_meta($post->ID, 'timeticket_start_time', true ), current_time( 'timestamp' ) ); ?></b></p>
        <p>End Zeit in: <b><?=  human_time_diff(get_post_meta($post->ID, 'timeticket_end_time', true ), current_time( 'timestamp' ) ); ?></b></p>
        <input type="submit" class="ticket-btn stop-time-ticket" value="Jetzt Beenden"/>
        <input type="submit" class="ticket-btn delete-time-ticket" value="Löschen"/>
      </div>
      <?php
    endwhile;
  } else {
    echo '<p style="margin: 10px;"> No Tickets! </p>'; 
  }
  echo '<div ><p class="time-ticket-toggle"><b>x</b> Schließen</br></p></div>';
  echo '</div></div>';

  wp_reset_query();
  

  $query_arg = array(
    'post_type' => 'ticket',
    'posts_per_page' => 10, 
    'orderby' => 'date', 
    'order' => 'ASC',
    'post_status' => 'publish',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'device',
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    echo '<div id="ticket-listing">';
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
      $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
      $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
      $device_id = get_post_meta($post->ID, 'device_id', true );
      $available = ($waiting['time'] == 0);
      ?>
      <div class="<?= $available ? "fl-ticket-element blink" :  "fl-ticket-element"; ?>" 
        style="border-left: 5px solid <?= $color ?>;"
        data-ticket-id="<?= $post->ID ?>" data-device-id="<?=  $device_id ?>"
        data-duration="<?=  get_post_meta($post->ID, 'duration', true ) ?>"
        data-user-id="<?=  $post->post_author ?>" data-device-name="<?= get_device_title_by_id($device_id) ?>"
        data-user="<?=  get_user_by('id', $post->post_author)->display_name ?>" >
        <p><?= the_time('l, j. F, G:i') ?><p>
        <h2><?= $post->post_title ?></h2>
        <p>für Gerät: <b><?=  get_device_title_by_id($device_id) ?>,</b> </br> 
        Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></br>
        Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
        <input type="submit" <?= $available ? "" :  "disabled"; ?>
        class="ticket-btn assign-ticket" value="Ticket zuweisen"/>
        <input type="submit" class="ticket-btn deactivate-ticket" value="Ticket deaktivieren"/>
      </div>
      <?php
      /* Verfügbar: <b><?=  is_device_availabel_range($device_id, current_time( 'timestamp' ), (current_time( 'timestamp' ) + (60 * get_post_meta($post->ID, 'duration', true )))) ?></b></br>
    */
    endwhile;
    echo '</div>';
  }

  wp_reset_query();
  
  // Display overlay change Ticket
  ?>
  <div id="overlay" class="fl-overlay" hidden>
    <div id="device-ticket-box" class="device-ticket" hidden>
      <a href="#" class="close">x</a>
      <h2>Ticket zuweisen</h2>
      <p id="user-name"></p>
      <p id="device-name"></p>
      <p id="waiting-time"><p>
      <p>Dauer: <select id="time-select"></select></p>
      <input type="submit" id="submit-ticket" class="button-primary" value="Ticket zuweisen"/>
      <input type="submit" class="button-primary cancel-overlay" value="Abbrechen"/>
    </div> 
  <div class="fl-overlay-layer"></div>
  </div>
  <?php

  $query_arg = array(
    'post_type' => 'ticket',
    'posts_per_page' => 10, 
    'orderby' => 'date', 
    'order' => 'ASC',
    'post_status' => 'publish',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'instruction',
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    echo '<div id="instruction-listing">';
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
      $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
      $device_id = get_post_meta($post->ID, 'device_id', true );
      ?>
      <div class="fl-ticket-element instruction-element" style="border-top: 5px solid <?= $color ?>;"
        data-ticket-id="<?= $post->ID ?>" data-device-id="<?=  $device_id ?>"
        data-user-id="<?=  $post->post_author ?>" data-user="<?=  get_user_by('id', $post->post_author)->display_name ?>"
        <p><?= the_time('l, j. F, G:i') ?><p>
        <h2><?= $post->post_title ?></h2>
        <p>für Gerät: <b><?=  get_device_title_by_id(get_post_meta($post->ID, 'device_id', true )) ?></b></p>
        <input type="submit" class="ticket-btn set-permissions" value="Berechtigung bearbeiten"/>
      </div>
      <?php
    endwhile;
    echo '</div>';
  }

  wp_reset_query();
  
  // Display overlay change Ticket
  ?>
  <div id="permission-overlay" class="fl-overlay" hidden>
  <div id="permission-box" class="device-ticket">
    <a href="#" class="close">x</a>
    <h2>Berechtigung bearbeiten</h2>
    <p id="user"></p>
    <div id="permission-list"></div>
    <input type="submit" id="submit-permission" class="button-primary" value="Berechtigungen speichern"/>
    <input type="submit" class="button-primary cancel-overlay" value="Abbrechen"/>
  </div>
  <div class="fl-overlay-layer"></div>
  </div>
  <?php
}

?>