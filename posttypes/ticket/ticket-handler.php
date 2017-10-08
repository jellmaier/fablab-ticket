<?php


// method for rest request
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


  if($include_waiting) {
    //if (get_term_meta($device_id, 'usage_type', true) == 'ticket_schedule')
      //$status = '5-waiting';
    //else
      $status = array('5-waiting','1-assigned');
  }else
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


function check_and_delete_finished_tickets() {

  global $post;

  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => array( 
      'meta_value' => 'ASC', 
      'date' => 'ASC',
    ),
    'meta_key' => 'status',
    'meta_query' => array( 
      'key'=>'status',
      'value'=> '0-finished',
    )
  );


  $ticket_query = new WP_Query($query_arg);

  if ( $ticket_query->have_posts() ) {
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post();
      
      $timeticket_id = get_post_meta( $post->ID, 'timeticket_id', true );
      $finishtime = get_post_meta( $timeticket_id, 'timeticket_end_time', true );

      
      if( !empty($finishtime) && (( current_time( 'timestamp' ) - $finishtime) >= (60 * fablab_get_option('ticket_delay')))) {
        disconnect_ticket_of_timeticket($timeticket_id);
        wp_delete_post($post->ID);
      }

    endwhile;
  } 

}

?>