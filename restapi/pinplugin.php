<?php


function rest_check_ticket_pin($data) {
  $pin = sanitize_text_field($data['pin']);

  if($pin < 1000)
    return new WP_Error( 'rest_notmodified', __( 'Data has not changed.', 'fablab-ticket' ), array( 'status' => 304 ) );

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