<?php

//namespace fablab_ticket;

if (!class_exists('TicketShortcodeInstructions'))
{
  class TicketShortcodeInstructions
  {
    public function __construct()
    {
    }
    //--------------------------------------------------------
    // Display User Instruction
    //--------------------------------------------------------
    public function display_user_instructions($ticket_query) {
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
    public function display_available_instruction_devices() {

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
  }
}

?>