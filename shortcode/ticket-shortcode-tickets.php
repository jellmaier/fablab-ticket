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
          'relation'=> 'AND',               
          array(
            'key' => 'device_status',                  
            'value' => 'online',               
            'compare' => '='                 
          ),
          array(
            'key' => 'device_qualification',                  
            'value' => 'pro',               
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

      if (fablab_get_option('ticket_calcule_waiting_time') == '1')
        $calc_waiting_time = true;
      else
        $calc_waiting_time = false;

      echo '<p>Hier werden dir die verfügbaren ' . fablab_get_captions('devices_caption') . ' angezeigt:</p>';
      echo '<div id="fl-getticket" class="device-list">';
      while ( $device_query->have_posts() ) : $device_query->the_post() ;
        if ((get_user_meta($user_id, $post->ID, true ) || !$permission_needed)
            && !user_has_ticket($user_id, $post->ID, 'device')) {
          $waiting = get_waiting_time_and_persons($post->ID, 'device');
          $color = get_device_type_color_field($post->ID) 
          ?>
          <div class="fl-device-element get-ticket"  style="border: 6px solid <?= $color ?>; background-color: <?= $color ?>;"
            data-device-id="<?= $post->ID ?>" data-device-name="<?= get_device_title_by_id($post->ID) ?>" data-device-type="device">
            <div class="fl-device-element-content">
              <h2><?= $post->post_title ?></h2>
              <p>Wartende Personen: <b><?= $waiting['persons'] ?></b></p>
              <?php if($calc_waiting_time) { ?>
              <p id="waiting-time">Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?></b></p>
              <?php } ?>
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
    }

    //--------------------------------------------------------
    // Display available Device-Types
    //--------------------------------------------------------
    public function display_available_dtypes($permission_needed) {
      global $post;

      $device_type_list = get_terms('device_type', array(
        'orderby'    => 'name',
        'hide_empty' => '0'
      ));

      $user_id = get_current_user_id();
      $devices_availabel = false;


      if ( empty($device_type_list) ) {
        echo '<p class="device-message">Es sind keine ' . fablab_get_captions('devices_caption') . ' online!</p>'; 
        wp_reset_query();
        return;
      }

      if (fablab_get_option('ticket_calcule_waiting_time') == '1')
        $calc_waiting_time = true;
      else
        $calc_waiting_time = false;

      printf (__('<p>Here you can see the available %s:</p>', 'fablab-ticket'), fablab_get_captions('devices_caption'));

      echo '<div id="fl-getticket" class="device-list">';
      foreach($device_type_list as $device_type) {
      // check premission and user has ticket missing
          //$waiting = get_waiting_time_and_persons($post->ID);
          $color = get_term_meta($device_type->term_id, 'tag_color', true);
          $waiting = get_waiting_time_and_persons($device_type->term_id, 'device_type');
          $number_devices = count(get_free_beginner_device_of_device_type($device_type->term_id));
          if($number_devices > 0) {
            ?>
            <div class="fl-device-element get-ticket"  style="border: 6px solid <?= $color ?>; background-color: <?= $color ?>;"
              data-device-id="<?= $device_type->term_id ?>" data-device-name="<?= $device_type->name ?>" data-device-type="device_type">
              <div class="fl-device-element-content">
                <h2><?= $device_type->name ?></h2>
                <p>Verfügbare Geräte: <b><?= $number_devices ?></b></br>
                Wartende Personen: <b><?= $waiting['persons'] ?></b></p>
                <?php if($calc_waiting_time) { ?>
                <p id="waiting-time">Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?></b></p>
                <?php } ?>
              </div>
            </div>
            <?php
            $devices_availabel = true;
          }
        }
      echo '</div>';

      if (!$devices_availabel) {
        echo '<p class="device-message">Zurzeit kannst du keine ' . fablab_get_captions('tickets_caption') . ' ziehen!</p>';
        //wp_reset_query();
        return;
      }
    }
    

    //--------------------------------------------------------
    // Display User Tickets
    //--------------------------------------------------------
    public function display_user_tickets($ticket_query) {
      global $post;
      echo '<p>Hier wird dir dein gezogenes ' . __( 'Ticket', 'fablab-ticket' ) . ' angezeigt:</p>';
      echo '<div id="ticket-listing" class="ticket-list">';

      if (fablab_get_option('ticket_calcule_waiting_time') == '1')
          $calc_waiting_time = true;
        else
          $calc_waiting_time = false;

      while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
        $ticket_type = get_post_meta($post->ID, 'ticket_type', true );
        $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $ticket_type, $post->ID);
        $device_id = get_post_meta($post->ID, 'device_id', true );
        $calc_time = fablab_get_option('ticket_calcule_waiting_time');

        if ($ticket_type == 'device') {
          $device_title = get_device_title_by_id($device_id);
          $color = get_device_type_color_field(get_post_meta($post->ID, 'device_id', true ));
          $available = is_device_availabel($device_id);
        } else if ($ticket_type == 'device_type') {
          $device_title = get_term( $device_id, 'device_type')->name;
          $color = get_term_meta($device_id, 'tag_color', true);
          $available = (count(get_free_device_of_device_type($device_id)) > 0);
        }
        (($post->post_status) == 'draft') ? $opacity = 0.6 : $opacity = 1;
        if((get_post_meta($post->ID, 'activation_time', true ) == 'not set') || $opacity == 1) {
          ?>
          <div class="fl-ticket-element<?= $available ? " blink" :  ""; ?>" style="border-left: 5px solid <?= $color ?>; opacity: <?= $opacity ?>;"
            data-ticket-id="<?= $post->ID ?>" data-device-id="<?=  $device_id ?>" data-device-type="<?= $ticket_type ?>" 
            data-duration="<?=  get_post_meta($post->ID, 'duration', true ) ?>"
            data-user-id="<?=  $post->post_author ?>" data-device-name="<?= $device_title ?>"
            data-user="<?=  get_user_by('id', $post->post_author)->display_name; ?>">
            <p><?= the_time('l, j. F, G:i') ?><p>
            <h2><?= fablab_get_captions('ticket_caption') ?></h2>
            <p>für <?= fablab_get_captions('device_caption') ?> : <b><?= $device_title ?></b></p>
            <?php if($calc_waiting_time) { ?>
            <p>Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></p>
            <p id="waiting-time">Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?></b></p>
            <?php } ?>
             <p>Vor dir wartende Personen: <b><?= $waiting['persons'] ?></b></p>
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

    }

  }
}

?>