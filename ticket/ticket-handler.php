<?php

function get_waiting_time_and_persons($device_id, $ticket = 0) {
  global $post;
  $temp_post = $post;
  //--------------------------------------------------------
  // Display available Devices
  //--------------------------------------------------------
  $waiting = array();
  $waiting['time'] = 0;
  $waiting['persons'] = 0;

  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => 'date',
    'order'   => 'ASC',
    'meta_query' => array(   
      'relation'=> 'OR',               
      array(
        'key' => 'device_id',                  
        'value' => $device_id,               
        'compare' => '='                 
      )
    ) 
  );
  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;

      //------------------------------------------
      // start deactivation handler
      check_and_deactivate_ticket($post->ID);

      if ($post->ID == $ticket) {
        check_and_activate_ticket($ticket, $waiting['time']);
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

function check_and_deactivate_ticket($ticket_id){
  $activation_time = get_activation_time($ticket_id);
  if( !empty($activation_time) && (( current_time( 'timestamp' ) - $activation_time) >= (60 * fablab_get_option('ticket_delay')))) {
    deactivate_ticket($ticket_id);
  }
}

function check_and_activate_ticket($ticket_id, $waiting_time) {
  if($waiting_time == 0){
    set_activation_time($ticket_id);
  }
}

function get_divice_waiting_time() {
  $device_id = $_POST['device_id'];
  echo json_encode(get_waiting_time_and_persons($device_id));
  die();
}
add_action( 'wp_ajax_get_online_devices_select_options', 'get_online_devices_select_options' );

?>