<?php

//--------------------------------------------------------
// Rest get ancd check TAC
//--------------------------------------------------------

function rest_check_and_get_tac() {

  $agb_page = get_post( fablab_get_tac('tac_pageid'), ARRAY_A );
  $result = array();
  $result['accepted'] = fablab_user_tac_acceptance();
  //$result['tac_needed'] = fablab_get_tac('tac_needed');
  $result['tac'] = apply_filters("the_content", $agb_page['post_content']);

  //update_user_meta( get_current_user_id(), 'tac_acceptance_date', '' );
  return $result;
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/check_and_get_tac', array(
    'methods' => 'GET',
    'callback' => 'rest_check_and_get_tac',
    'permission_callback' => 'rest_ticket_user_permission',
  ) );
} );

//--------------------------------------------------------
// Rest get ancd check TAC
//--------------------------------------------------------

function rest_set_user_tac_accaptance($data) {
  update_user_meta( get_current_user_id(), 'tac_acceptance_date', current_time( 'timestamp' ) );
  return rest_check_and_get_tac(); 
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/set_user_tac_accaptance', array(
    'methods' => 'POST',
    'callback' => 'rest_set_user_tac_accaptance',
    'permission_callback' => 'rest_ticket_user_permission',
  ) );
} );

//--------------------------------------------------------
// Rest Activate/Deactivate Ticket-System
//--------------------------------------------------------

function rest_ticket_system_online($data) {
  $set_online = sanitize_text_field($data['set_online']);

  $options = fablab_get_option();
  
  if($set_online == 'online')
    $options['ticket_online'] = 1; 
  else if($set_online == 'offline')
    $options['ticket_online'] = 0; 

  update_option( 'option_fields', $options);
     
  return $options['ticket_online'];
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/ticket_system_online', array(
    'methods' => 'POST',
    'callback' => 'rest_ticket_system_online',
    'permission_callback' => 'rest_is_manager',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


function rest_check_terminal_token($data) {  
  $token = sanitize_text_field($data['token']);
  $return = array();
  $return['is_terminal'] = ($token == fablab_get_option('terminal_token'));
  $return['login_terminal_only'] = (fablab_get_option('ticket_terminals_only') == '1');
  $return['auto_logout'] = fablab_get_option('auto_logout');
  $return['is_admin'] = is_manager();
  $return['user_display_name'] = wp_get_current_user()->display_name;
  return $return;
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/check_terminal_token', array(
    'methods' => 'GET',
    'callback' => 'rest_check_terminal_token',
  ) );
} );

function rest_get_terminal_token($data) {     
  return fablab_get_option('terminal_token');
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/get_terminal_token', array(
    'methods' => 'GET',
    'callback' => 'rest_get_terminal_token',
    'permission_callback' => 'rest_is_manager',
  ) );
} );



//--------------------------------------------------------
// Logout Rest Endpoint
//--------------------------------------------------------

function rest_logout($data) {
  wp_logout();
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/logout', array(
    'methods' => 'GET',
    'callback' => 'rest_logout',
  ) );
} );




?>