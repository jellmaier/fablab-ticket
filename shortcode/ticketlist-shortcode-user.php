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

      $online_devices = get_online_devices();
      $online_decices_ids = $this->get_online_devices_ids($online_devices);
      $selected_devices = $this->handle_device_list($online_decices_ids);

      if(isset($_GET['fullscreen'])) {
        echo '<input type="text" id="fullscreen" disabled  hidden value="' . isset($_GET['fullscreen']) . '">';
        $device_colums = floor($_GET['width']/ $ticket_width);
        $ticket_rows = max(floor(($_GET['height'] - $initial_height) / $ticket_height), 1);
        echo '<div class="fl-fullscreen-layer">';
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
        $this->display_options($online_devices, $selected_devices);
        $this->display_devicelist($selected_devices, count($selected_devices));
      }  

    }


    //--------------------------------------------------------
    // Display Options Headder
    //--------------------------------------------------------
    private function display_options($online_devices, $selected_devices) {
      $active = 'style="background: #fff;color: #74a4a3;" ';

      $devices_caption = fablab_get_captions('devices_caption');

      echo '<ul class="device-selector">'; 
      echo '<li><input type="submit" id="show-all-devices" ' . (isset($_GET['alldevices'])?$active:'') . 'value="Alle ' . $devices_caption .'"></li>';  
      echo '<li><input type="submit" id="show-used-devices" ' . (isset($_GET['useddevices'])?$active:'') . 'value="Belegte ' . $devices_caption .'"></li>';
      echo '<li><input type="submit" id="show-free-devices" ' . (isset($_GET['freedevices'])?$active:'') . 'value="Freie ' . $devices_caption .'"></li>'; 
      echo '<li><input type="submit" id="show-devices-selector" ' . (isset($_GET['devices'])?$active:'') . 'value="' . $devices_caption .' auswählen">'; 
      echo '<ul class="devices-checkbox">';
      foreach ($online_devices as $device) {
        if(in_array($device['id'], $selected_devices)){
          $checked = 'checked';
        } else {
          $checked = '';
        }
        echo '<li><input type="checkbox" class="device-checkbox" id="' . $device['id'] 
          . '"' . $checked . '>' . $device['device'] . '   </input></li>';  
      } 
      echo '<li><input type="submit" id="show-selected-devices" class="option-button" value="' . $devices_caption .' anzeigen"></li>';
      echo '</ul>';
      echo '</li>';
      echo '</ul>';


    }

    //--------------------------------------------------------
    // Online Device IDs
    //--------------------------------------------------------
    private function get_online_devices_ids($online_devices) {
      // php 5.5+ version
      //$online_devices = array_column ( $devices, 'id');
      $online_devices_ids = array(); 
      foreach ($online_devices as $device) {
        array_push ($online_devices_ids, $device['id']);
      }
      return $online_devices_ids;
    }

    //--------------------------------------------------------
    // Handles Devices List
    //--------------------------------------------------------
    private function handle_device_list($online_devices_ids) {
      
      if(isset($_GET['devices'])){
        $device_list = explode(',', $_GET['devices']);
        $selected_devices = array(); 
        foreach ($device_list as $device_id) {
          if(in_array($device_id, $online_devices_ids)){
            array_push ($selected_devices, $device_id);
          }  
        }
        echo '<div id="fl-device-string" data-devices-string="' . '&devices=' .  $_GET['devices'] . '"></div>';
        return $selected_devices;

      } else if(isset($_GET['alldevices'])) {
        echo '<div id="fl-device-string" data-devices-string="' . '&alldevices' . '"></div>';
        return $online_devices_ids;

      } else if(isset($_GET['useddevices'])) {
        $selected_devices = array();
        foreach ($online_devices_ids as $device_id) {
          if(!is_device_availabel($device_id)){
            array_push ($selected_devices, $device_id);
          }  
        }
        echo '<div id="fl-device-string" data-devices-string="' . '&useddevices' . '"></div>';
        return $selected_devices;

      } else if(isset($_GET['freedevices'])) {
        $selected_devices = array();
        foreach ($online_devices_ids as $device_id) {
          if(is_device_availabel($device_id)){
            array_push ($selected_devices, $device_id);
          }  
        }
        echo '<div id="fl-device-string" data-devices-string="' . '&freedevices' . '"></div>';
        return $selected_devices;

      } else {
        echo '<div id="fl-device-string" data-devices-string="' . '&alldevices' . '"></div>';
        return $online_devices_ids;
      }
    }


    //--------------------------------------------------------
    // Display device List
    //--------------------------------------------------------
    private function display_devicelist($selected_devices, $device_colums, $ticket_rows = -1) {
      $counter = 0;

      $showlist = false;

      if(isset($_GET['next'])) {
        $next = $_GET['next'];
        // display first selected device, when "next" not available
        if(!in_array($next, $selected_devices)){
          $next = $selected_devices[0];
        }
      } else {
        $showlist = true;
      }


      if(count($selected_devices) > 0) {
        foreach ($selected_devices as $device) {
          if($device == $next) {
            $showlist = true;
          }
          if(($counter < $device_colums) && $showlist) {
            $this->display_device($device, $ticket_rows);
            $counter++;
          } else if($showlist) {
            echo '<div id="next-device" data-next-device="' . $device . '"></div>';
            return;
          }
        }
      } else {
        echo '<div class="device-box"><p>Kein Gerät verfügbar!</p></div>';
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
    private function display_device_tickets($device_id, $post_number = -1) {

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