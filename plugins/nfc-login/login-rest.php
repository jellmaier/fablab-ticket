<?php

//--------------------------------------------------------
// Rest method to check nfc token
//--------------------------------------------------------

function check_user_logins_left($user_id) {
  $latest_login_time = get_user_meta( $user_id, 'last-login-fail', true );

  $max_number_logins = intval(fablab_get_option('number_login_fails'));
  
  if (empty($latest_login_time))
    return $max_number_logins;

  $time_diff = current_time(  'timestamp' ) - $latest_login_time;

  if ($time_diff > (60 * intval(fablab_get_option('login_fail_delay')))) { 
    delete_user_meta( $user_id, 'last-login-fail');
    delete_user_meta( $user_id, 'login-fails');
    return $max_number_logins;
  }


  $login_fails = intval(get_user_meta( $user_id, 'login-fails', true ));

  if ($login_fails < intval(fablab_get_option('number_login_fails'))) { 
    return $max_number_logins - $login_fails;
  }

  return 0;
}

function calc_user_next_login($user_id) {
  $latest_login_time = get_user_meta( $user_id, 'last-login-fail', true );
  $time_diff = current_time(  'timestamp' ) - $latest_login_time;
  return (intval(fablab_get_option('login_fail_delay')) - ($time_diff/60));
}

function set_user_login_fail($user_id) {
  $login_fails = intval(get_user_meta( $user_id, 'login-fails', true ));
  update_user_meta( $user_id, 'login-fails', $login_fails + 1 );
  update_user_meta( $user_id, 'last-login-fail', current_time( 'timestamp' ) );
}

function rest_check_user_login($data) {

  if(!isset( $data['username'] ))  
    return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );


  $username = sanitize_text_field($data['username']);
  $password = sanitize_text_field($data['password']);
  $user = get_user_by( 'login', $username );
  $user_id = $user->ID;

  $logins_left = check_user_logins_left($user_id);
  if($logins_left == 0) {
    $time_left = calc_user_next_login($user_id);
    return new WP_Error( 'rest_forbidden', sprintf(__( 'Zu viele Versuche! Nächster Login in %d Minuten möglich.' ), $time_left), array( 'status' => 401 ) );
  }

  //from https://codex.wordpress.org/Function_Reference/wp_signon
  $creds = array();
  $creds['user_login'] = sanitize_text_field($data['username']);
  $creds['user_password'] = sanitize_text_field($data['password']);
  $creds['remember'] = false;
  $user_response = wp_signon( $creds );
  if ( is_wp_error($user_response) ) {
    set_user_login_fail($user_id);
    //return intval(get_user_meta( $user_id, 'login-fails', true ));
    return new WP_Error( 'no_user_found', sprintf(__( 'Login fehlgeschlagen, du hast noch %d versuche übrig.', 'fablab-ticket' ), $logins_left), array( 'status' => 401 ) );
  }


  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/check_user_login', array(
    'methods' => 'GET',
    'callback' => 'rest_check_user_login',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


  


?>