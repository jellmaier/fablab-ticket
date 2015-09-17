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
  global $fl_ticketlist_script;
  $fl_ticketlist_script = true;
  $user_id = get_current_user_id();
  $is_manager = current_user_can( 'manage_options' );

  //--------------------------------------------------------
  // Display Ticket List
  //--------------------------------------------------------
  if ($is_manager) {
    display_manager_ticketlist();
  } else {
    display_ticketlist();
  }
  
}

//--------------------------------------------------------
// Display Tickets
//--------------------------------------------------------
function display_ticketlist() {
    $query_arg = array(
    'post_type' => 'ticket',
    'posts_per_page' => 10, 
    'orderby' => 'date', 
    'order' => 'ASC'
  );
  $ticket_query = new WP_Query($query_arg);

  global $post;
  echo '<p>Hier werden dir die aktiven Ticket angezeigt:</p>';
  echo '<div id="ticket-listing" action="" metod="POST">';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    ?>
    <a href="#" data-name="<?= $post->ID ?>">
    <div class="fl-ticket-element" style="border-left: 5px solid <?= $color ?>;">
      <p><?= the_time('l, j. F, G:i') ?><p>
      <h2><?= $post->post_title ?></h2>
      <p>für Gerät: <b><?=  get_device_title_by_id(get_post_meta($post->ID, 'device_id', true )) ?>,</b> </br> 
      Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></br>
      Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
    </div>
    </a>
    <?php
  endwhile;
  echo '</div>';

  wp_reset_query();

}


//--------------------------------------------------------
// Display Manager View Tickets
//--------------------------------------------------------
function display_manager_ticketlist() {

    $query_arg = array(
    'post_type' => 'ticket',
    'posts_per_page' => 10, 
    'orderby' => 'date', 
    'order' => 'ASC',
    'post_status' => array('publish', 'draft')
  );
  $ticket_query = new WP_Query($query_arg);

  global $post;
  echo '<p>Hier werden dir die aktiven Ticket angezeigt:</p>';
  echo '<div id="message" hidden class="message-box"></div>';
  echo '<div id="ticket-listing" action="" metod="POST">';
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
    $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
    $device_id = get_post_meta($post->ID, 'device_id', true );
    ?>
    <a href="#" data-name="<?= $post->ID ?>">
    <div class="fl-ticket-element" style="border-left: 5px solid <?= $color ?>;">
      <p><?= the_time('l, j. F, G:i') ?><p>
      <h2><?= $post->post_title ?></h2>
      <p>für Gerät: <b><?=  get_device_title_by_id($device_id) ?>,</b> </br> 
      Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></br>
      Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?>.</b></p>
      <input type="hidden" id="ticket-device-id" value="<?=  $device_id ?>">
      <input type="hidden" id="ticket-duration" value="<?=  get_post_meta($post->ID, 'duration', true ) ?>">
      <input type="hidden" id="ticket-user-id" value="<?=  $post->post_author ?>">
      <input type="hidden" id="ticket-user" value="<?=  get_user_by('id', $post->post_author)->display_name; ?>">
      <input type="submit" name="<?=  $post->post_title ?>" id="<?=  $post->post_title ?>" class="ticket-btn" value="Ticket zuweisen"/>
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
      <a href="#" id="overlay-close" class="close">x</a>
      <h2>Ticket zuweisen</h2>
      <p id="user-name"></p>
      <p id="device-name"></p>
      <p id="waiting-time"><p>
      <p>Dauer: <select id="time-select"></select></p>
      <input type="submit" id="submit-ticket" class="button-primary" value="Ticket zuweisen"/>
      <input type="submit" id="delete-ticket" class="button-primary" value="Löschen"/>
      <input type="submit" id="cancel-ticket" class="button-primary" value="Abbrechen"/>
   </div>
   <div id="overlay-background" class="fl-overlay-background"></div>
  </div>
  <?php
}

?>