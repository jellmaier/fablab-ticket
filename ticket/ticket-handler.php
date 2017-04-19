<?php


function get_waiting_time_and_persons($device_id, $device_type, $ticket = 0) {

  $waiting = get_device_ticket_waiting_time($device_id, $device_type, $ticket);


  if($device_type == 'device')
    $waiting['time'] = device_waiting_time($device_id, $waiting['time']);
  else if ($device_type == 'device_type') {
    $free_devices = get_free_beginner_device_of_device_type($device_id);
    //echo '<p>Count: ' . count($free_devices) . ', ID: ' . $free_devices[0] . ', Waiting: ' . $waiting['persons'] . '</p>';
    if (count($free_devices) <= $waiting['persons'])
      $waiting['time'] += fablab_get_option('ticket_max_time');
  }

  check_and_activate_ticket($ticket, $waiting['time']);

  return $waiting;
}



function get_device_ticket_waiting_time($device_id, $ticket_type, $ticket = 0) {
  global $post;
  $temp_post = $post;
  //--------------------------------------------------------
  // Display available Devices
  //--------------------------------------------------------
  $waiting = array();
  $waiting['time'] = 0;
  $waiting['persons'] = 0;

  /* handle device tickets from beginner devices
  if($ticket_type == 'device') {
    if(get_post_meta( $device_id, 'device_qualification', true ) == 'beginner') {

      // get device_type
      // query of devicetype and device
    }
  }
  */

  // query for pro devices and device types

  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => 'date',
    'order'   => 'ASC',
    'meta_query' => array(   
      'relation'=> 'AND',               
      array(
        'key' => 'device_id',                  
        'value' => $device_id,               
        'compare' => '='                 
      ),
      array(
          'key'=>'ticket_type',
          'value'=> $ticket_type,
      ),
      array(
          'key'=>'status',
          'value'=> '5-waiting',
      )
    ) 
  );
  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;

      //------------------------------------------
      // start deactivation handler
      //check_and_deactivate_ticket($post->ID);

      if ($post->ID == $ticket) {
        return $waiting;
      } else {
        $waiting['persons'] ++;
        $waiting['time'] += get_post_meta($post->ID, 'duration', true );
      }
    endwhile;
  } 

  wp_reset_query();
  $post = $temp_post;

  return $waiting;
}

function device_available($device_id, $device_type = 'device', $ticket = 0, $include_waiting = true) {

  $waiting = get_device_waiting_persons($device_id, $device_type, $ticket, $include_waiting);

  $number_devices = get_beginner_device_of_device_type($device_id);
/*
  // just for testing
  $waiting['devices'] = count($number_devices);

  if (count($number_devices) > $waiting['persons'])
    $waiting['available'] = true;
  else
    $waiting['available'] = false;

  return $waiting;
  */
  if (count($number_devices) > $waiting['persons'])
    return true;

  return false;
}

function get_device_waiting_persons($device_id, $ticket_type, $ticket = 0, $include_waiting = true) {
  global $post;
  $temp_post = $post;
  //--------------------------------------------------------
  // Display available Devices
  //--------------------------------------------------------
  $waiting = array();
  $waiting['time'] = 0;
  $waiting['persons'] = 0;

  //$waiting['ticket_type'] = $ticket_type;
  //$waiting['ticket_id'] = $ticket;
  //$waiting['include_waiting'] = $include_waiting;


  if($include_waiting)
    $status = array('5-waiting','1-assigned');
  else
    $status = '1-assigned';


  // query for pro devices and device types



  if($ticket_type == 'device_type') {
    $device_list = get_devicees_of_device_type($device_id);
    $meta_array = array(
      'relation'=>'AND',
      array(
        'relation'=>'OR',
          array(
          'relation'=>'AND',
          array(
              'key'=>'ticket_type',
              'value'=> 'device_type',
          ),
          array(
            'key'=>'device_id',
            'value'=> $device_id,
          )
        ),
        array(
          'relation'=>'AND',
          array(
              'key'=>'ticket_type',
              'value'=> 'device',
          ),
          array(
            'key'=>'device_id',
            'value'=> $device_list,
          )
        )
      ),
      array(
          'key'=>'status',
          'value'=> $status,
      )
    );
  } else {
    $meta_array = array(  
      'relation'=> 'AND',               
      array(
        'key' => 'device_id',                  
        'value' => $device_id,               
        'compare' => '='                 
      ),
      array(
          'key'=>'ticket_type',
          'value'=> $ticket_type,
      ),
      array(
          'key'=>'status',
          'value'=> $status,
      )
    );
  }

  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => array( 
      'meta_value' => 'ASC', 
      'date' => 'ASC',
    ),
    'meta_key' => 'status',
    'meta_query' => $meta_array
  );

  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;

      //------------------------------------------
      // start deactivation handler
      //check_and_deactivate_ticket($post->ID);

      if ($post->ID == $ticket) {
        return $waiting;
      } else {
        $waiting['persons'] ++;
        $waiting['time'] += get_post_meta($post->ID, 'duration', true );
      }
    endwhile;
  } 

  wp_reset_query();
  $post = $temp_post;

  return $waiting;
}

function check_and_deactivate_ticket($ticket_id) {
  $activation_time = get_activation_time($ticket_id);
  if( !empty($activation_time) && (( current_time( 'timestamp' ) - $activation_time) >= (60 * fablab_get_option('ticket_delay')))) {
    deactivate_ticket($ticket_id);
  }
}

function check_and_delete_ticket($ticket_id) {
  $activation_time = get_activation_time($ticket_id);
  if( !empty($activation_time) && (( current_time( 'timestamp' ) - $activation_time) >= (60 * fablab_get_option('ticket_delay')))) {
    wp_delete_post($ticket_id);
  }
}
function check_and_activate_ticket($ticket_id, $waiting_time) {
  if(($waiting_time == 0) && ( get_post_status($ticket_id) == 'publish')){
    set_activation_time($ticket_id);
  }
}

function get_divice_waiting_time() {
  $device_id = $_POST['device_id'];
  echo json_encode(get_waiting_time_and_persons($device_id, 'device'));
  die();
}
add_action( 'wp_ajax_get_online_devices_select_options', 'get_online_devices_select_options' );

?>