<?php

/*
if (!class_exists('NFCLoginShortcode'))
{
  class NFCLoginShortcode
  {
    public function __construct()
    {
      // Displaying Logout Button
      add_shortcode( 'nfc-login', array(&$this, 'nfc_login_shortcode') );
    }

    // Shortcode Function
    public function nfc_login_shortcode($atts){

      if (!is_user_logged_in())
        return $this->html_nfc_login();

      return;    

    }

    //--------------------------------------------------------
    // HTML Login Overlay
    //--------------------------------------------------------

    private function html_nfc_login(){

      global $nfc_login_script; // script loader
      $nfc_login_script = true;
      return '<div ng-app="nfcLogin" ng-controller="nfcLoginCtrl" ng-include="templates_url + \'nfcLoginTemplate.html\'"></div>';
        
    }

  }
}
*/
//--------------------------------------------------------
// Rest method to check nfc token
//--------------------------------------------------------

function rest_check_nfc_token($data) {

  if(!isset( $data['token'] ))  
    return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );


  $token = sanitize_text_field($data['token']);


  if(strlen($token) < 6)  
    return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );


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
        $user_id = $user->ID;
        // from codex : https://codex.wordpress.org/Function_Reference/wp_set_current_user
        $user = get_user_by( 'id', $user_id ); 
        if( $user ) {
            wp_set_current_user( $user_id, $user->user_login );
            wp_set_auth_cookie( $user_id );
            do_action( 'wp_login', $user->user_login );
            //wp_redirect( bloginfo('url') . '/wordpress/get-ticket/' ); exit;
        }
      }
    } else
      return new WP_Error( 'no_user_found', __( 'No User Found.', 'fablab-ticket' ), array( 'status' => 401 ) );
  
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/check_nfc_token', array(
    'methods' => 'GET',
    'callback' => 'rest_check_nfc_token',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


//--------------------------------------------------------
// Rest method to set nfc token
//--------------------------------------------------------


function rest_set_nfc_token($data) {

  if(!isset( $data['token'] ))  
    return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );


  $token = sanitize_text_field($data['token']);


  if(strlen($token) < 6)  
    return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );


  $token_hash = wp_hash($token);

  update_user_meta( get_current_user_id(), 'nfc-token', $token_hash );
  
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/set_nfc_token', array(
    'methods' => 'POST',
    'callback' => 'rest_set_nfc_token',
    'permission_callback' => 'rest_ticket_user_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );



  


?>