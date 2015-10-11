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

//--------------------------------------------------------
// Display Tickets ViewS
//--------------------------------------------------------
function get_ticketlist_shortcode($atts){

  global $post;
  $is_manager = current_user_can( 'delete_others_posts' );

  //--------------------------------------------------------
  // Display Ticket List or Manager View Tickets
  //--------------------------------------------------------
  if ($is_manager) {
    display_manager_ticketlist();
  } else {
    display_ticketlist();
  }
  
}


//--------------------------------------------------------
// Display active Tickets
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

  // reload function
  echo '<p>Hier werden dir die aktiven Tickets angezeigt:</p>';
  if ($ticket_query->have_posts()) {
    echo '<META HTTP-EQUIV="refresh" CONTENT="10">';
  } else if(fablab_get_option('ticket_online') == 1) {
    echo '<META HTTP-EQUIV="refresh" CONTENT="60">';
  }
  echo '<div id="ticket-listing">';


  // Display Tickets
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
  
  global $fl_ticketlist_script;
  $fl_ticketlist_script = true;

  ?>
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

  //--------------------------------------------------------
  // Print different Views
  //--------------------------------------------------------

  print_deactivatet_tickets();

  print_active_timetickets();

  print_active_tickets();

  $device_list = get_online_devices();
  foreach($device_list as $device) {
    print_device_instruction($device['id']);
  }

  print_assign_overlay();

}


//--------------------------------------------------------
// Display active Tickets
//--------------------------------------------------------
function print_active_tickets() {
  global $post;

  echo '<p>Hier werden dir die aktiven Tickets angezeigt:</p>';

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
    echo '<div id="ticket-listing" class="ticket-list">';
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
    endwhile;
    echo '</div>';
  } else {
    echo '<p style="margin-bottom:40px; opacity: 0.6;"> -- Keine aktiven Tickets! -- </p>';
  }

  wp_reset_query();
}

//--------------------------------------------------------
// Display active Timeticket
//--------------------------------------------------------
function print_active_timetickets() {
  global $post;

  $time_delay = (fablab_get_option('ticket_delay') * 60);

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
          'value'=> (current_time( 'timestamp' ) - $time_delay),
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
        <p>Start Zeit: <b><?=  get_timediff_string(get_post_meta($post->ID, 'timeticket_start_time', true )) ?></b></p>
        <p>End Zeit: <b><?=  get_timediff_string(get_post_meta($post->ID, 'timeticket_end_time', true )) ?></b></p>
        <input type="submit" class="ticket-btn stop-time-ticket" value="Jetzt Beenden"/>
        <input type="submit" class="ticket-btn delete-time-ticket" value="Löschen"/>
        <input type="submit" data-minutes="30" class="ticket-btn extend-time-ticket" value="+30 Minuten"/>
      </div>
      <?php
    endwhile;
  } else {
    echo '<p style="margin: 10px;"> No Tickets! </p>'; 
  }
  echo '<div ><p class="time-ticket-toggle"><b>x</b> Schließen</br></p></div>';
  echo '</div></div>';

  wp_reset_query();
}


//--------------------------------------------------------
// Display deactivated tickets
//--------------------------------------------------------
function print_deactivatet_tickets() {
  global $post;

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
        <input type="submit" <?= ($waiting['time'] == 0) ? "" :  "disabled"; ?>
        class="ticket-btn assign-ticket" value="Ticket zuweisen"/>
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
}

//--------------------------------------------------------
// Display device instruction
//--------------------------------------------------------
function print_device_instruction($device_id) {
  global $post;


  $color = get_post_meta($device_id, 'device_color', true );
  $device_name = get_device_title_by_id($device_id);

  echo '<p>Gerät: <b>' .  $device_name . ',</b> Nächste Einschulung: <b>' . next_instruction($device_id) . '</b></p>';

  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => 'date', 
    'order' => 'ASC',
    'orderby' => 'post_author',
    'meta_query'=>array(
      'relation'=>'and',
      array(
          'key'=>'ticket_type',
          'value'=> 'instruction',
      ),
      array(
          'key'=>'device_id',
          'value'=> $device_id,
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    echo '<div id="instruction-listing" class="instruction-list">';
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
      ?>
      <div class="fl-ticket-element instruction-element" style="border-top: 5px solid <?= $color ?>;"
        data-ticket-id="<?= $post->ID ?>" data-device-id="<?=  $device_id ?>"
        data-user-id="<?=  $post->post_author ?>" >
        <p><?= the_time('l, j. F, G:i') ?><p>
        <h2><?= $post->post_title ?></h2>
        <p>für Gerät: <b><?= $device_name ?></b></p>
        <input type="submit" class="ticket-btn set-permission" value="Berechtigung hinzufügen"/>
        <input type="submit" class="ticket-btn delete-permission" value="Löschen"/>
      </div>
      <?php
    endwhile;
    echo '<div style="clear:left;"></div>';
  } else {
    echo '<p style="margin-bottom:40px; opacity: 0.6;"> -- Keine Einschulungsanfragen! -- </p>';
  }

  wp_reset_query();

}

//--------------------------------------------------------
// Display overlay assign Ticket
//--------------------------------------------------------
function print_assign_overlay() {
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
  <div id="overlay-background" class="fl-overlay-background" hidden></div>
  <?php
}

?>