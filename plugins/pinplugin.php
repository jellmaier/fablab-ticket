<?php


function rest_check_ticket_pin($data) {
  $pin = sanitize_text_field($data['pin']);
  $device_id = sanitize_text_field($data['device']);

  if($pin < 10000)
    return false;

  if(empty($device_id)) {
    $query_arg = array(
      'post_type' => 'ticket',
      'meta_query' => array(   
        'relation'=> 'OR',               
        array(
          'key' => 'pin',                  
          'value' => $pin,               
          'compare' => '='                 
        )
      ) 
    );
  } else {
    $query_arg = array(
      'post_type' => 'ticket',
      'meta_query' => array(   
        'relation'=> 'AND',               
        array(
          'key' => 'pin',                  
          'value' => $pin,               
          'compare' => '='                 
        ),
        array(
          'key' => 'device_id',                  
          'value' => $device_id,               
          'compare' => '='                 
        )
      ) 
    );
  }




  $result = array();
 
  $posts = get_posts( $query_arg);

  if ( !empty( $posts ) )
    $result['pincorrect'] = true;
  else
    $result['pincorrect'] = false;
    
  /*
  $result = array();
  $result['pincorrect'] = ($pin == 2573);
  if(!$result['pincorrect'])
    return new WP_Error( 'rest_notmodified', __( 'Data has not changed.', 'fablab-ticket' ), array( 'status' => 304 ) );
 */ 
  return $result;
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/ticket_pin', array(
    'methods' => 'GET',
    'callback' => 'rest_check_ticket_pin',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );




?>