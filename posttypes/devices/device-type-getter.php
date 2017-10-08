<?php


//--------------------------
// getter functions

function get_devicees_of_device_type($term_id) {
  return get_devices_of_device_type($term_id, $free=false, $beginner=false, $beginner_first=false, $user=0);
}

function get_free_beginner_device_of_device_type($term_id) {
  return get_devices_of_device_type($term_id, $free=true, $beginner=true, $beginner_first=false, $user=0);
}

function get_beginner_device_of_device_type($term_id) {
  return get_devices_of_device_type($term_id, $free=false, $beginner=true, $beginner_first=false, $user=0);
}

function get_free_device_of_device_type($term_id, $user_id = 0) {
  return get_devices_of_device_type($term_id, $free=true, $beginner=false, $beginner_first=true, $id_and_name=true, $user=$user_id);
}


function get_devices_of_device_type($term_id, $free=false, $beginner=false, $beginner_first=false, $id_and_name = false, $user=0)
{
  //permission handling missing
  global $post;
  $temp_post = $post;

  // create tax query

  $tax_query = array(
      array(
          'taxonomy' => 'device_type',
          'field' => 'term_id',
          'terms' => $term_id,
      )
  );

  // create meta query

  if($beginner) {
    $meta_query = array(   
        'relation'=> 'AND',               
          array(
            'key' => 'device_status',                  
            'value' => 'online',               
            'compare' => '='                 
          ),
          array(
            'key' => 'device_qualification',                  
            'value' => 'beginner',               
            'compare' => '='                 
          )
      ); 
  } else {
    $meta_query = array(               
        array(
          'key' => 'device_status',                  
          'value' => 'online',               
          'compare' => '='                 
        )
      );   
  }

  // create query

  if($beginner_first) {
    $query_arg = array(
      'post_type' => 'device',
      'orderby' => 'meta_value',
      'meta_key' => 'device_qualification',
      'order' => 'ASC',
      'tax_query' => $tax_query,
      'meta_query' => $meta_query
    );
  } else {
      $query_arg = array(
        'post_type' => 'device',
        'tax_query' => $tax_query,
        'meta_query' => $meta_query
     );
  }
   
  // query handling

  $device_query = new WP_Query($query_arg);
  $user_id = get_current_user_id();
  
  $device_list = array();

  if ( $device_query->have_posts() ) {
    while ( $device_query->have_posts() ) : $device_query->the_post() ;
      //if ((get_user_meta($user_id, $post->ID, true ) || !$permission_needed) {
    // device_available($device_id, $device_type = 'device', $ticket = 0, $include_waiting = true)
      if(!$free || ($free && is_device_availabel($post->ID))) { // debricated check 
        //if(!$free || ($free && device_available($post->ID, $device_type = 'device', $ticket = 0, $include_waiting = false))) {
          if($id_and_name) {
            $device = array();
            $device['id'] = $post->ID;
            $device['name'] = $post->post_title;
            array_push($device_list, $device);
          } else 
          array_push($device_list, $post->ID);
       }
    endwhile;
  }

  wp_reset_query();
  $post = $temp_post;

  return $device_list;
}


function get_device_type_title_by_id($device_type_id) {
  $device_type = get_term($device_type_id, 'device_type');
  return $device_type->name;
}

function get_device_types($user_id = 0) {
  //permission handling missing
  global $post;

  $device_type_list = get_terms('device_type', array(
    'orderby'    => 'name',
    'hide_empty' => '1'
  ));

  $available_devicees = array();
  foreach($device_type_list as $device_type) {
    $number_devices = count(get_beginner_device_of_device_type($device_type->term_id));
    if($number_devices > 0) {
      $device = array();
      $device['id'] = $device_type->term_id;
      $device['name'] = $device_type->name;
      array_push($available_devicees, $device);
    }
  }
  return $available_devicees;
}

function get_device_types_ajax() {
  $user_id = sanitize_text_field($_POST['user_id']);
  echo json_encode(get_device_types($user_id));
  die();
}
add_action( 'wp_ajax_get_device_types', 'get_device_types_ajax' );


function get_devices_of_device_types_ajax() {
  $user_id = sanitize_text_field($_POST['user_id']);
  $ticket_type = sanitize_text_field($_POST['ticket_type']);
  $device_id = sanitize_text_field($_POST['device_id']);

  if($ticket_type == 'device'){
    $device_type_id_array = wp_get_post_terms($device_id, 'device_type', array("fields" => "ids"));
    $device_type_id = $device_type_id_array[0];
  }
  else if ($ticket_type == 'device_type')
    $device_type_id = $device_id;
  else
    die();

  echo json_encode(get_free_device_of_device_type($device_type_id, $user_id));
  die();
}
add_action( 'wp_ajax_get_devices_of_device_types', 'get_devices_of_device_types_ajax' );

function get_device_type_description() {
  $device_type_id = sanitize_text_field($_POST['device_type_id']);
  die(term_description($device_type_id, 'device_type'));
}
add_action( 'wp_ajax_get_device_type_description', 'get_device_type_description' );


?>