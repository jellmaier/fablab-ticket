<?php

function is_no_device_entry($ID) {
  $post_object = get_post($ID);
  return (empty($post_object) && ($post_object->post_type != 'device'));
}

function is_no_device_type($ID) {
  $device_type = get_terms('device_type', array(
        'orderby'    => 'name',
        'fields'    => 'id=>name',
        'hide_empty' => '0'
      ));
  return empty($device_type);
}

function get_device_content() {
  $device_id = $_POST['device_id'];
  //$ticket_id = '43';
  $device = get_post( $device_id, ARRAY_A );
  //echo var_dump($ticket);
  //$contetnt = $post['post_contetnt'];
  $content = apply_filters ("the_content", $device['post_content']);

  die($content);
}
add_action( 'wp_ajax_get_device_content', 'get_device_content' );

function get_device_title() {
  $device_id = $_POST['device_id'];
  $device = get_post( $device_id, ARRAY_A );
  $title = $device['post_title'];

  die($title);
}
add_action( 'wp_ajax_get_device_title', 'get_device_title' );

function get_device_title_by_id($device_id) {
  $device = get_post( $device_id, ARRAY_A );
  return $device['post_title'];
}

function get_online_devices() {
  $temp_post = $post;
  global $post;
  $query_arg = array(
    'post_type' => 'device',
    'meta_query' => array(   
      'relation'=> 'OR',               
      array(
        'key' => 'device_status',                  
        'value' => 'online',               
        'compare' => '='                 
      )
    ) 
  );
  $device_query = new WP_Query($query_arg);
  $device_list = array();
  if ( $device_query->have_posts() ) {
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      $device = array();
      $device['id'] = $post->ID;
      $device['device'] = $post->post_title;
      array_push($device_list, $device);
    endwhile;
  } 
  wp_reset_query();
  $post = $temp_post;

  return $device_list;
}



add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/online_devices', array(
    'methods' => 'GET',
    'callback' => 'get_online_devices'
  ) );
} );



function get_online_pro_devices() {
  $temp_post = $post;
  global $post;
  $query_arg = array(
    'post_type' => 'device',
    'meta_query' => array(   
      'relation'=> 'AND',               
      array(
        'key' => 'device_status',                  
        'value' => 'online',               
        'compare' => '='                 
      ),
      array(
        'key' => 'device_qualification',                  
        'value' => 'pro',               
        'compare' => '='                 
      )
    ) 
  );
  $device_query = new WP_Query($query_arg);
  $device_list = array();
  if ( $device_query->have_posts() ) {
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      $device = array();
      $device['id'] = $post->ID;
      $device['device'] = $post->post_title;
      array_push($device_list, $device);
    endwhile;
  } 
  wp_reset_query();
  $post = $temp_post;

  return $device_list;
}

?>
