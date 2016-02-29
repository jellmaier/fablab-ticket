<?php

//namespace fablab_ticket;

//--------------------------------------------------------
// Display Manager View Tickets
//--------------------------------------------------------

if (!class_exists('TicketListShortcodeAdmin'))
{
  class TicketListShortcodeAdmin
  {
    public function __construct()
    {
      global $fl_ticketlist_manager;
      $fl_ticketlist_manager = true;

      ?>
      <div id="message-container"></div>
      <div class="busy" hidden></div>
      <div class="reload-layer" hidden>;
        <div class="reload-layer-box">
          <p>Die Seite wurde vor mehr als 1 Minute geladen und ist nicht mehr aktuell!</p>
          <div id="reload-reload" class="reload-layer-left"><img src="../wp-content/plugins/fablab-ticket/css/reload.svg"><p>Reload</p></div>
          <div class="reload-layer-center"><img src="../wp-content/plugins/fablab-ticket/css/line.svg"></div>
          <div id="reload-cancel" class="reload-layer-left"><img src="../wp-content/plugins/fablab-ticket/css/cancel.svg"><p>Später</p></div>
        </div>
        <div class="reload-layer-background"></div>
      </div>

      <div class="reload">
        <?php 
        if(fablab_get_option('ticket_online') == 1){
          echo '<a style="text-decoration: none; margin-right: 10px;" id="disable-ticketing" href="#">' . fablab_get_captions('ticket_system_caption') . ' deaktivieren</a>';
        } else {
          echo '<a style="text-decoration: none; margin-right: 10px;" id="enable-ticketing" href="#">' . fablab_get_captions('ticket_system_caption') . ' aktivieren</a>';
        }
        ?>
      </div>
      <?php

      //--------------------------------------------------------
      // Print different Views
      //--------------------------------------------------------
      $option_captions = array(
        'devices' => fablab_get_captions('devices_caption'),
        'tickets' => fablab_get_captions('tickets_caption'),
        'time-tickets' => fablab_get_captions('time_tickets_caption'),
        'instruction-tickets' => fablab_get_captions('instruction_requests_caption'),
      );
      $this->display_options($option_captions);

      $option_captions = array(
        'ticketing' => 'Disable Ticketing',
        'reload' => '&#8634 Reload',
      );
      //$this->display_options($option_captions, '&#9881 Settings');

      if(isset($_GET['devices'])){
        $this->display_devices_page();

      } else if(isset($_GET['tickets'])) {
        echo '<h2>' . fablab_get_captions('tickets_caption') . '</h2>';
        $this->print_deactivatet_tickets();
        $this->print_active_tickets();

      } else if(isset($_GET['time-tickets'])) {
        $this->print_active_timetickets();

      } else if(isset($_GET['instruction-tickets'])) {
        echo '<h2>' . fablab_get_captions('instruction_requests_caption') . '</h2>';
        
        $device_list = get_online_devices();
        if ( count($device_list) != 0 ) {  
          foreach($device_list as $device) {
            $this->print_device_instruction($device['id']);
          }
        } else {
          echo '<p style="margin-bottom:40px; opacity: 0.6;"> -- Keine aktiven ' . fablab_get_captions('tickets_caption') . '! -- </p>';
        }      

      } else {
        $this->display_devices_page();
      }

      $this->print_assign_overlay();

    }


    //--------------------------------------------------------
    // Display Options Headder
    //--------------------------------------------------------
    private function display_options($option_captions, $menu_caption = '') {

      $active = 'style="background: #fff;color: #74a4a3;" ';

      $menu_name = '';
      echo '<div class="menu">';

      if($menu_caption){
        echo '<input type="submit" class="menu-option" value="' . $menu_caption . '">'; 
      } else {
        foreach ($option_captions as $caption => $value) {
          if(isset($_GET[$caption])) {
            $menu_name = $value; 
          }
        }
      }
      if($menu_name) {
        echo '<input type="submit" class="menu-option" value="&#9776  ' . $menu_name . '">';
      } else {
        echo '<input type="submit" class="menu-option" value="&#9776  ' . reset($option_captions) . '">';
      }
 
       
      echo '<ul class="menu-dropdown">';
      foreach ($option_captions as $caption => $value) {
        echo '<li><input type="submit" id="' . $caption . '" class="option-button" ' . (isset($_GET[$caption])?$active:'') . 'value="' . $value . '"></li>';
      }
      echo '</ul>';
      echo '</div>';

    }


    //--------------------------------------------------------
    // Display Device
    //--------------------------------------------------------
    private function display_devices($device_id = '') {

      $this->print_active_timetickets($device_id);
     
      echo '<h2>' . fablab_get_captions('tickets_caption') . '</h2>';
      $this->print_deactivatet_tickets($device_id);
      $this->print_active_tickets($device_id);

      echo '<h2>' . fablab_get_captions('instruction_requests_caption') . '</h2>';

      if($device_id) {
        $this->print_device_instruction($device_id);
      } else {
        $device_list = get_online_devices();
        foreach($device_list as $device) {
          $this->print_device_instruction($device['id']);
        }
      }

    }

    //--------------------------------------------------------
    // Display Device Page
    //--------------------------------------------------------
    private function display_devices_page() {


      echo '<h2>' . fablab_get_captions('devices_caption') . '</h2>';
      echo '<p>Hier werden dir die aktiven ' . fablab_get_captions('devices_caption') . ' angezeigt:</p>';
      $device_list = get_online_devices();

      if ( count($device_list) != 0 ) {  
        foreach($device_list as $device) {
          echo '<div class="device-list-box">';
          echo '<div class="device-toggle" style="border-left: 4px solid ' . get_post_meta($device['id'], 'device_color', true )
          . ';"><p><b>' . $device['device'] . '</b></p></div>';


          echo '<div class="device-listing" hidden>';
          $this->display_devices($device['id']);
          echo '<div class="device-close"><p><b>x</b> Schließen</br></p></div>';
          echo '</div></div>';
        }
      } else {
        echo '<p style="margin-bottom:40px; opacity: 0.6;"> -- Keine aktiven ' . fablab_get_captions('tickets_caption') . '! -- </p>';
      }      

    }


    //--------------------------------------------------------
    // Display active Tickets
    //--------------------------------------------------------
    function print_active_tickets($device_id = '') {
      global $post;

      if($device_id){
        $meta_array = array(
          array(
              'key'=>'ticket_type',
              'value'=> 'device',
          ),
          array(
            'key'=>'device_id',
            'value'=> $device_id,
          )
        );
      } else {
        $meta_array = array(
          array(
              'key'=>'ticket_type',
              'value'=> 'device',
          )
        );
      }

      echo '<p>Hier werden dir die aktiven ' . fablab_get_captions('tickets_caption') . ' angezeigt:</p>';

      $query_arg = array(
        'post_type' => 'ticket',
        'posts_per_page' => 10, 
        'orderby' => 'date', 
        'order' => 'ASC',
        'post_status' => 'publish',
        'meta_query'=> $meta_array,
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
            <p>für <?= fablab_get_captions('device_caption') ?> : <b><?=  get_device_title_by_id($device_id) ?></b> </br> 
            Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></br>
            Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?></b></p>
            <input type="submit" <?= $available ? "" :  "disabled"; ?>
            class="ticket-btn assign-ticket" value="<?= fablab_get_captions('ticket_caption') ?> zuweisen"/>
            <input type="submit" class="ticket-btn deactivate-ticket" value="<?= fablab_get_captions('ticket_caption') ?> deaktivieren"/>
          </div>
          <?php
        endwhile;
        echo '</div>';
      } else {
        echo '<p style="margin-bottom:40px; opacity: 0.6;"> -- Keine aktiven ' . fablab_get_captions('tickets_caption') . '! -- </p>';
      }

      wp_reset_query();
    }

    //--------------------------------------------------------
    // Display active Timeticket
    //--------------------------------------------------------
    function print_active_timetickets($device_id = '') {
      global $post;


      echo '<h2>' . fablab_get_captions('time_tickets_caption') . '</h2>';
      echo '<p>Hier werden dir die aktiven ' . fablab_get_captions('time_tickets_caption') . ' angezeigt:</p>';

      if($device_id){
        $meta_array = array(
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
          ),
          array(
            'key'=>'timeticket_device',
            'value'=> $device_id,
            'compare' => '='
          )
        );
      } else {
        $meta_array = array(
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
        );
      }

      $time_delay = (fablab_get_option('ticket_delay') * 60);


      $query_arg = array(
        'post_type' => 'timeticket',
        'posts_per_page' => 10, 
        'orderby' => 'date', 
        'order' => 'ASC',
        'meta_query'=> $meta_array,
      );
      $ticket_query = new WP_Query($query_arg);
      if ( $ticket_query->have_posts() ) {
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
            <input type="submit" class="ticket-btn delete-time-ticket" value="Löschen"/>
            <input type="submit" data-minutes="30" class="ticket-btn extend-time-ticket" value="+30 Minuten"/>
          </div>
          <?php
        endwhile;
      } else {
        echo '<p style="margin-bottom:40px; opacity: 0.6;"> -- Keine aktiven ' . fablab_get_captions('time_tickets_caption') . '! -- </p>';
      }

      wp_reset_query();
    }


    //--------------------------------------------------------
    // Display deactivated tickets
    //--------------------------------------------------------
    function print_deactivatet_tickets($device_id = '') {
      global $post;

      if($device_id){
        $meta_array = array(
          array(
              'key'=>'ticket_type',
              'value'=> 'device',
          ),
          array(
            'key'=>'device_id',
            'value'=> $device_id,
          )
        );
      } else {
        $meta_array = array(
          array(
              'key'=>'ticket_type',
              'value'=> 'device',
          )
        );
      }

      $query_arg = array(
        'post_type' => 'ticket',
        'orderby' => 'date', 
        'order' => 'ASC',
        'post_status' => 'draft',
        'meta_query'=> $meta_array,
      );

      $ticket_query = new WP_Query($query_arg);
      if ( $ticket_query->have_posts() ) {
        echo '<div class="draft-box">';
        echo '<div class="draft-toggle"><p class="draft-title">Deaktivierte ' . fablab_get_captions('tickets_caption') . '</p></div>';
        echo '<div id="draft-ticket-listing" hidden>';
        while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
          $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
          $device_id = get_post_meta($post->ID, 'device_id', true );
          $availabel = is_device_availabel($device_id);
          check_and_delete_ticket($post->ID);
          ?>
          <div class="fl-ticket-element draft-content" data-ticket-id="<?= $post->ID ?>" style="border-left: 5px solid <?= $color ?>;"
            data-ticket-id="<?= $post->ID ?>" data-device-id="<?=  $device_id ?>"
            data-duration="<?=  get_post_meta($post->ID, 'duration', true ) ?>"
            data-user-id="<?=  $post->post_author ?>" data-device-name="<?= get_device_title_by_id($device_id) ?>"
            data-user="<?=  get_user_by('id', $post->post_author)->display_name; ?>" >
            <p><?= the_time('l, j. F, G:i') ?><p>
            <h2><?= $post->post_title ?></h2>
            <p>für <?= fablab_get_captions('device_caption') ?> : <b><?=  get_device_title_by_id($device_id) ?></b></br> 
            Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></p>
            <input type="submit" <?= $availabel ? "" :  "disabled"; ?>
            class="ticket-btn assign-ticket" value="<?= fablab_get_captions('ticket_caption') ?> zuweisen"/>
            <input type="submit" class="ticket-btn activate-ticket" value="<?= fablab_get_captions('ticket_caption') ?> aktivieren"/>
            <input type="submit" class="ticket-btn delete-ticket" value="<?= fablab_get_captions('ticket_caption') ?> löschen"/>
          </div>
          <?php
        endwhile;
        echo '</div>';
        echo '<div class="draft-toggle"><div class="arrow-down"></div></div>';
        echo '</div>';
      } 
      

      wp_reset_query();
    }

    //--------------------------------------------------------
    // Display device instruction
    //--------------------------------------------------------
    function print_device_instruction($device_id) {
      global $post;


      $color = get_post_meta($device_id, 'device_color', true );
      $device_name = get_device_title_by_id($device_id);

      echo '<p>' . fablab_get_captions('device_caption') . ' : <b>' .  $device_name . ',</b> Nächste ' . fablab_get_captions('instruction_caption') . ': <b>' . next_instruction($device_id) . '</b></p>';

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
            data-user-id="<?=  $post->post_author ?>" data-device-name="<?= get_device_title_by_id($device_id) ?>"
            data-user="<?=  get_user_by('id', $post->post_author)->display_name; ?>" >
            <p><?= the_time('l, j. F, G:i') ?><p>
            <h2><?= $post->post_title ?></h2>
            <p>für <?= fablab_get_captions('device_caption') ?> : <b><?= $device_name ?></b></p>
            <input type="submit" class="ticket-btn set-permission" value="Berechtigung hinzufügen"/>
            <input type="submit" class="ticket-btn delete-permission" value="Löschen"/>
          </div>
          <?php
        endwhile;
        echo '<div style="clear:left;"></div>';
      } else {
        echo '<p style="margin-bottom:40px; opacity: 0.6;"> -- Keine ' . fablab_get_captions('instruction_requests_caption') . '! -- </p>';
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
          <h2><?= fablab_get_captions('ticket_caption') ?> zuweisen</h2>
          <p id="user-name"></p>
          <p id="device-name"></p>
          <p id="waiting-time"><p>
          <p>Dauer: <select id="time-select"></select></p>
          <input type="submit" id="submit-ticket" class="button-primary" value="<?= fablab_get_captions('ticket_caption') ?> zuweisen"/>
          <input type="submit" class="button-primary cancel-overlay" value="Abbrechen"/>
        </div> 
      <div class="fl-overlay-layer"></div>
      </div>
      <div id="overlay-background" class="fl-overlay-background" hidden></div>
      <?php
    }
  }
}

?>