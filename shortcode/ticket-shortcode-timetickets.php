<?php

//namespace fablab_ticket;

//--------------------------------------------------------
// Display active Timeticket
//--------------------------------------------------------

if (!class_exists('TicketShortcodeTimeticket'))
{
  class TicketShortcodeTimeticket
  {
    public function __construct($ticket_query) {
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
  }
}


?>