<?php


// from https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/


//--------------------------------------------------------
// Get Tickets by Query
//--------------------------------------------------------

 function restGetTickets($ticket_query, $old_hash) {
  
  $ticket_list = array();

  global $post;

  if ( $ticket_query->have_posts() ) {
    while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;

      $ticket = getTicketValues($post->ID);
      $ticket['post_title'] = $post->post_title;
      $ticket['post_date'] = $post->post_date;

      array_push($ticket_list, $ticket);

    endwhile;

  } else {
    $result = array();
    $result['hash'] = 'empty';
    return $result;
  }

  wp_reset_query();     


  $result = array();
  $result['tickets'] = $ticket_list;
  $result['hash'] = wp_hash(serialize($ticket_list));

  if($result['hash'] == $old_hash)
    return new WP_Error( 'rest_notmodified', __( 'Data has not changed.', 'fablab-ticket' ), array( 'status' => 304 ) );

  return $result;
}


//--------------------------------------------------------
// Rest get Tickets from current User
//--------------------------------------------------------

function restMyTickets($data) {
  $old_hash = sanitize_text_field($data['hash']);
  
  return restGetTickets(get_ticket_query_from_user(get_current_user_id()), $old_hash);

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v2', '/myTickets', array(
    'methods' => 'GET',
    'callback' => 'restMyTickets',
    'permission_callback' => 'rest_ticket_user_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


//--------------------------------------------------------
// Rest create links function
//--------------------------------------------------------


function restCreateLink($appLink, $relation, $type = 'GET') {



  $link = array();
//  $link['href'] = get_bloginfo('wpurl') . '/wp-json/sharepl/v2/' . $appLink;
  $link['href'] = $appLink;
  $link['rel'] = $relation;
  $link['type'] = $type;
  
  return $link;

}

//--------------------------------------------------------
// Rest get Profiles for current User
//--------------------------------------------------------

function restProfilesCurrentUser($data) {

  $links = array(); 
  array_push($links, restCreateLink('profiles' . '/' . get_current_user_id(), 'related'));

  $resource = array();
  $resource['links'] = $links;
  
  return $resource;

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v2', '/profiles', array(
    'methods' => 'GET',
    'callback' => 'restProfilesCurrentUser',
   // 'permission_callback' => 'restUserPermissionById',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );

//--------------------------------------------------------
// Rest get Profile for User
//--------------------------------------------------------

function restProfiles($data) {

    $links = array(); 
  array_push($links, restCreateLink('profiles' . '/' . get_current_user_id(). '/tickets', 'tickets'));

  $resource = array();
  $resource['links'] = $links;
  
  return $resource;

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v2', '/profiles/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'restProfiles',
   // 'permission_callback' => 'restUserPermissionById',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );

//--------------------------------------------------------
// Rest get Tickets from current User
//--------------------------------------------------------

function restTicketsForUser($data) {
  $old_hash = sanitize_text_field($data['hash']);
  
  return restGetTickets(get_ticket_query_from_user(get_current_user_id()), $old_hash);

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v2', '/profiles/(?P<id>\d+)/tickets', array(
    'methods' => 'GET',
    'callback' => 'restTicketsForUser',
   // 'permission_callback' => 'restUserPermissionById',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


//--------------------------------------------------------
// get Ticket values
//--------------------------------------------------------
function getTicketValues($ticket_id) {

  $ticket = array();

  $ticket['ID'] = $ticket_id;
  $ticket_type = get_post_meta($ticket_id, 'ticket_type', true );
  $ticket_status = get_post_meta($ticket_id, 'status', true );
  $ticket['status'] = substr($ticket_status, 2);
  $device_id = get_post_meta($ticket_id, 'device_id', true );

  if ($ticket_status == '5-waiting') {
    $ticket['available'] = device_available($device_id, $ticket_type, $ticket_id);
  } else {
    $ticket['available'] = false;
  }
  
  if ($ticket_type == 'device') {
    $ticket['device_title'] = get_device_title_by_id($device_id);
    $ticket['color'] = get_device_type_color_field(get_post_meta($ticket_id, 'device_id', true ));
  } else if ($ticket_type == 'device_type') {
    $ticket['device_title'] = get_term( $device_id, 'device_type')->name;
    $ticket['color'] = get_term_meta($device_id, 'tag_color', true);
  }
  $ticket['device_id'] = $device_id;

  if (get_post_field( 'post_author', $ticket_id ) == get_current_user_id()) {
    $ticket['pin'] = get_post_meta($ticket_id, 'pin', true );
  }
 
  return $ticket; 
}


?>