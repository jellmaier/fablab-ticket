<?php

//namespace fablab_ticket;

if (!class_exists('TicketShortcodeTicket'))
{
  class TicketShortcodeTicket
  {
    public function __construct()
    {
    }

    //--------------------------------------------------------
    // Display available Devices
    //--------------------------------------------------------
    public function display_available_devices($permission_needed) {
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
        echo '<p class="device-message">Zurzeit kannst du keine ' . fablab_get_captions('tickets_caption') . ' ziehen!</p>';
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
    // Display User Tickets
    //--------------------------------------------------------
    public function display_user_tickets($ticket_query) {
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

  }
}

?>