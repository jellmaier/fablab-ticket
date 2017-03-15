<?php


// not includet

// just copy and paste old function



// from https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/

//--------------------------------------------------------
// get active Tickets
//--------------------------------------------------------
function fl_rest_user_tickets($data) {


        $ticket_query = get_ticket_query_from_user(get_current_user_id());
      
      

      if ( $ticket_query->have_posts() && ($timeticket_count < $tickets_per_user)) {
        echo '<h2>' . $tickets_caption . '</h2>';
        $tickets->display_user_tickets($ticket_query);
      }




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
        } else if ($ticket_type == 'device_type') {
          $device_title = get_term( $device_id, 'device_type')->name;
          $color = get_term_meta($device_id, 'tag_color', true);
        }
        $available = ($waiting['time'] == 0);
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


  
  $posts = get_posts( $query_arg);
 
  if ( empty( $posts ) ) {
    return null;
  }
 
  return $posts;
}


function fl_get_private_data_permissions_check() {
    // Restrict endpoint to only users who have the edit_posts capability.
    if ( ! current_user_can( 'edit_posts' ) ) {
        return new WP_Error( 'rest_forbidden', esc_html__( 'OMG you can not view private data.', 'my-text-domain' ), array( 'status' => 401 ) );
    }
 
    // This is a black-listing approach. You could alternatively do this via white-listing, by returning false here and changing the permissions check.
    return true;
}


add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/user_ticket', array(
    'methods' => 'GET',
    'callback' => 'fl_rest_user_tickets',
    'permission_callback' => 'fl_get_private_data_permissions_check',
  ) );
} );



?>