<?php

//namespace fablab_ticket;

if (!class_exists('TicketListShortcodeUser'))
{
  class TicketListShortcodeUser
  {
    public function __construct()
    {
      global $fl_ticketlist_user;
      $fl_ticketlist_user = true;

      $device_colums = 1;
      $ticket_rows = 3;

      $ticket_width = 600;
      $ticket_height = 200;
      $initial_height = 300;

      $selected_devices = explode(',', $_GET['devices']);

      if(isset($_GET['fullscreen'])) {
        echo '<input type="text" id="fullscreen" disabled  hidden value="' . isset($_GET['fullscreen']) . '">';
        $device_colums = floor($_GET['width']/ $ticket_width);
        $ticket_rows = floor(($_GET['height'] - $initial_height) / $ticket_height);
        echo '<div data-devices="' . $_GET['devices'] . '"class="fl-fullscreen-layer">';
        echo '<a href="#" id="close-fullscreen" class="close">x</a>';
        echo '<div class="devices-box" style="width: ' . $device_colums * $ticket_width . 'px;">'; 
        $this->display_devicelist($selected_devices, $device_colums, $ticket_rows);
        echo '</div>';
        echo '</div>'; 
        echo '<div class="fl-fullscreen-background"></div>';
      } else {
        echo '<div class="reload">';
        echo '<a style="text-decoration: none;" id="get-fullscreen" href="#">⤢ fullscreen</a>';
        echo '</div>';
        $devices = get_online_devices();
        echo '<p><b>Ansicht für ' . fablab_get_captions('devices_caption') . ':</b></p>';
        echo '<div class="device-checkboxes">'; 
        foreach ($devices as $device) {
          if(!isset($_GET['devices']) || in_array($device['id'], $selected_devices)){
            $checked = 'checked';
          } else {
            $checked = '';
          }
          echo '<input type="checkbox" class="device-checkbox" id="' . $device['id'] 
            . '"' . $checked . '>' . $device['device'] . '   </input>';  
        }
        echo '</div>';
        $this->display_devicelist($selected_devices, $device_colums, $ticket_rows);
      }

    }


    //--------------------------------------------------------
    // Display device List
    //--------------------------------------------------------
    private function display_devicelist($selected_devices, $device_colums, $ticket_rows) {
      $counter = 0;

      $showlist = false;

      if(isset($_GET['next'])) {
        $next = $_GET['next'];
      } else {
        $showlist = true;
      }

      foreach ($selected_devices as $device) {
        if($device == $next) {
          $showlist = true;
        }
        if(($counter < $device_colums) && $showlist) {
          $this->display_device($device, $ticket_rows);
          $counter++;
        } else if($showlist) {
          echo '<input type="text" id="next-device" disabled  hidden value="' . $device . '">';
          return;
        }
      }

    }

    //--------------------------------------------------------
    // Display one Device
    //--------------------------------------------------------
    private function display_device($device_id, $ticket_number) {

      $color = get_post_meta($device_id, 'device_color', true );
      echo '<div class="device-box">';
      echo '<h2 style="border-bottom: 4px solid ' . $color 
          . '; display: inline-block;" >' . get_device_title_by_id($device_id) . '</h2>';
      $this->display_decvice_timeticket($device_id);
      $this->display_device_tickets($device_id, $ticket_number);
      echo '</div>';

    }
    //--------------------------------------------------------
    // Display active Tickets
    //--------------------------------------------------------
    private function display_decvice_timeticket($device_id) {

      $query_arg = array(
        'post_type' => 'timeticket',
        'orderby' => 'date', 
        'order' => 'ASC',
        'posts_per_page' => 1,
        'meta_query'=>array(
        'relation'=>'and',
          array(
              'key'=>'timeticket_device',
              'value'=> $device_id,
          ),
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
      $time_ticket_query = new WP_Query($query_arg);
      $this->display_user_timeticketlist($time_ticket_query);

    }

    private function display_user_timeticketlist($time_ticket_query) {
      //Time-Tiket listing
      echo '<div class="time-ticket-list">';
      echo '<p>Hier wird die Person angezeigt, die das ' . fablab_get_captions('device_caption') . ' aktuell nutzt:</p>';
      global $post;
      if ( $time_ticket_query->have_posts() ) {
        while ( $time_ticket_query->have_posts() ) : $time_ticket_query->the_post() ;
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
          </div>
          <?php
        endwhile;
      } else {
        echo '<p style="margin: 10px;"> ' . fablab_get_captions('device_caption') . ' wird nicht genutzt! </p>'; 
      }
      echo '</div>';

      wp_reset_query();
    }

    //--------------------------------------------------------
    // Display active Tickets
    //--------------------------------------------------------
    private function display_device_tickets($device_id, $post_number = 1) {

      $query_arg = array(
        'post_type' => 'ticket',
        'orderby' => 'date', 
        'order' => 'ASC',
        'posts_per_page' => $post_number,
        'meta_query'=>array(
          'relation'=>'and',
          array(
              'key'=>'ticket_type',
              'value'=> 'device',
          ),
          array(
              'key'=>'device_id',
              'value'=> $device_id,
          )
        )
      );
      $ticket_query = new WP_Query($query_arg);

      global $post;

      $this->display_user_ticketlist($ticket_query);

    }


    //--------------------------------------------------------
    // Display Manager View Tickets
    //--------------------------------------------------------
    private function display_user_ticketlist($ticket_query) {
      // Display Tickets
      echo '<div class="ticket-list">';
      echo '<p>Hier werden die wartende Personen angezeigt:</p>';
      global $post;
      if ( $ticket_query->have_posts() ) {
        while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
          $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $post->ID);
          $color = get_post_meta(get_post_meta($post->ID, 'device_id', true ), 'device_color', true );
          $available = ($waiting['time'] == 0);
          ?>
          <div class="<?= $available ? "fl-ticket-element blink" :  "fl-ticket-element"; ?>" 
            style="border-left: 5px solid <?= $color ?>;">
            <p><?= the_time('l, j. F, G:i') ?><p>
            <h2><?= $post->post_title ?></h2>
            <p>für <?= fablab_get_captions('device_caption') ?> : <b><?=  get_device_title_by_id(get_post_meta($post->ID, 'device_id', true )) ?></b> </br> 
            Benutzungsdauer: <b><?=  get_post_time_string(get_post_meta($post->ID, 'duration', true )) ?></b></br>
            Vorraussichtlich Wartezeit: <b><?= get_post_time_string($waiting['time'], true) ?></b></p>
          </div>
          <?php
        endwhile;
      } else {
        echo '<p style="margin: 10px;"> Keine wartenden Personen! </p>'; 
      }
      echo '</div>';

      wp_reset_query();

    }

  }
}

?>