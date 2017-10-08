<?php

// ----------------------------------
// Rest API Methods
// ----------------------------------

function rest_user_device_types($data) {
  // user_id has no effect
  if(isset($data['id']))
    $user_id = $data['id'];
  else
    $user_id = 0;

  if (fablab_get_option('ticket_online') != 1)
    return new WP_Error( 'rest_ticket_offline', __( 'Ticket-System offline', 'fablab-ticket' ), array( 'status' => 423 ) );

  return get_device_types($user_id);
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/user_device_types', array(
    'methods' => 'GET',
    'callback' => 'rest_user_device_types',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

function rest_device_type_content($data) {
  $device_type_id = $data['id'];
  return term_description($device_type_id, 'device_type');
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/device_type_content/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'rest_device_type_content',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

//--------------------------------------------------------
// get Device-Type values
//--------------------------------------------------------
function rest_device_type_values($data) {
  $device_type_id = $data['id'];

  //is_ticket_entry($ticket_id);

  $device_type = array();
  $device_type['color'] = get_term_meta($device_type_id, 'tag_color', true);
  $device_type['usage_type'] = get_term_meta($device_type_id, 'usage_type', true);

  // check total user ticket count
  $query_arg = array( 'post_type' => 'ticket', 'author' => get_current_user_id(), 'post_status' => 'publish');
  $user_ticket_count =  count(get_posts($query_arg));
  $tickets_per_user = fablab_get_option('tickets_per_user');
  $device_type['max_available'] = ($user_ticket_count < $tickets_per_user);


  // check user device ticket count
  $device_ticket_count = get_number_of_tickets_by_device_type_and_user($device_type_id, get_current_user_id());
  $tickets_per_device = fablab_get_option('tickets_per_device');
  $ticket_device_available = ($device_ticket_count < $tickets_per_device);
  $device_type['available'] = ($ticket_user_available || $ticket_device_available );

  // count online Devices
  $device_type['online'] = (count(get_devicees_of_device_type($device_type_id)) > 0);
  
  if ( empty( $device_type ) ) {
    return null;
  }
 
  return $device_type; 
}


function get_number_of_tickets_by_device_type_and_user($device_id, $user_id) {

  $device_list = get_devicees_of_device_type($device_id);
  $meta_array = array(
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
  );
  
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'post_status' => 'publish',
    'meta_query' => $meta_array
  );

  $posts = get_posts( $query_arg);
  return count( $posts ) ;

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/device_type_values/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'rest_device_type_values',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


function rest_devices_for_ticket($data) {
  $user_id = sanitize_text_field($data['user_id']);
  $ticket_id = sanitize_text_field($data['ticket_id']);
  //$device_id = sanitize_text_field($data['device_id']);

  $ticket_type = get_post_meta($ticket_id, 'ticket_type', true );
  $device_id = get_post_meta($ticket_id, 'device_id', true );

  if($ticket_type == 'device'){
    $device_type_id_array = wp_get_post_terms($device_id, 'device_type', array("fields" => "ids"));
    $device_type_id = $device_type_id_array[0];
  }
  else if ($ticket_type == 'device_type')
    $device_type_id = $device_id;
  else
    return null;

  return get_free_device_of_device_type($device_type_id, $user_id);

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/devices_for_ticket', array(
    'methods' => 'GET',
    'callback' => 'rest_devices_for_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

/*
function rest_device_type_description() {
  $device_type_id = sanitize_text_field($_POST['device_type_id']);
  die(term_description($device_type_id, 'device_type'));
}
add_action( 'wp_ajax_get_device_type_description', 'get_device_type_description' );
*/

?>