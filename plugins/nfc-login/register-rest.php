<?php

//--------------------------------------------------------
// Rest method to check register
//--------------------------------------------------------


function check_nfc_token($token) {

  if(strlen($token) < 6)
    return 0;

  $token_hash = wp_hash($token);


  $args = array(
      'meta_key'     => 'nfc-token',
      'meta_value'   => $token_hash,
    );
    $user_query = new WP_User_Query($args);
    // Get the results
    $users = $user_query->get_results();
    // Check for results
    if (count($users) == 1) {
      foreach ($users as $user)
      {
        return $user->ID;
      }
    } else
      return 0;
  
  return 0;
}


function rest_register_user_on_terminal($data) {

  $params = $data->get_params();

  $terminaltoken = sanitize_text_field($params['params']['terminaltoken']);

  if( $terminaltoken != fablab_get_option('terminal_token'))  
    return new WP_Error( 'rest_forbidden', __( 'You can only register on the Terminal!.', 'fablab-ticket' ), array( 'status' => 401 ) );

  $username = sanitize_text_field($params['params']['username']);
  $name = sanitize_text_field($params['params']['name']);
  $surename = sanitize_text_field($params['params']['surename']);
  $email = sanitize_text_field($params['params']['email']);
  $password = sanitize_text_field($params['params']['password']);
  $cardid = sanitize_text_field($params['params']['cardid']);

  if( strlen($username) < 5 )
    return new WP_Error( 'rest_forbidden', __( 'Username to short!', 'fablab-ticket' ), array( 'status' => 401 ) );

  if(strlen($password) < 8)  
    return new WP_Error( 'rest_forbidden', __( 'Password to short!', 'fablab-ticket' ), array( 'status' => 401 ) );

  if(check_nfc_token($cardid) != 0)
    return new WP_Error( 'rest_forbidden', __( 'Karte schon vorhanden!', 'fablab-ticket' ), array( 'status' => 401 ) );


  $user = wp_create_user( $username, $password, $email );

  

  // Check for errors.
  //$user = isset( $user['do_user'] ) ? $user['do_user'] : $user;

  if ( is_wp_error( $user ) ) {
    return $user; // return error
  } else {

    $user_id = $user;
    
    if( !empty( $name ) )
      update_user_meta( $user_id, 'first_name', $name );

    if( !empty( $surename ) )
      update_user_meta( $user_id, 'last_name', $surename);

    if(strlen($cardid) >= 6) {
      $token_hash = wp_hash($cardid);
      update_user_meta( $user_id, 'nfc-token', $token_hash );
    }


    // Send notification if password is manually added by the user.
    wpum_new_user_notification( $user_id, $password );


    //login user
    $user_login = get_user_by( 'id', $user_id ); 
    if( $user_login ) {
        wp_set_current_user( $user_id, $user_login->user_login );
        wp_set_auth_cookie( $user_id );
        do_action( 'wp_login', $user_login->user_login );
    }

    return new WP_REST_Response( null, 200 );
  }

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/register_user_on_terminal', array(
    'methods' => 'POST',
    'callback' => 'rest_register_user_on_terminal',
    //'sanitize_callback' => 'rest_data_arg_sanitize_callback'
  ) );
} );



?>