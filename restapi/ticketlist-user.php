<?php


// from https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/

/*
if (!class_exists('TicketListShortcodeUser'))
{
  class TicketListShortcodeUser
  {
    public function __construct()
    {
    }
*/
    //--------------------------------------------------------
    // get active Tickets
    //--------------------------------------------------------
    function rest_device_tickets($data) {

      $device_id = $data['id'];
      $post_number = -1;

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

      /*
          array(
          'key'=>'status',
          'value'=> array('5-waiting', '6-inactive')
        )
        */
/*
      $query_arg = array(
        'post_type' => 'ticket',
        'posts_per_page' => $post_number, 
        'orderby' => array( 
          'title' => 'DESC',
          'date' => 'ASC' 
          ),
        'post_status' => 'publish',
        'meta_query'=> $meta_array,
      );
      */

      $query_arg = array(
        'post_type' => 'ticket',
        'posts_per_page' => $post_number, 
        'orderby' => array( 
          'meta_value' => 'ASC', 
          'date' => 'ASC' 
          ),
        'meta_key' => 'status',
        'post_status' => 'publish',
        'meta_query'=> $meta_array,
      );

      $posts = get_posts( $query_arg);
     
      if ( empty( $posts ) ) {
        $result['hash'] = 'empty';
        return $result;
      }
      $result = array();
      $result['tickets'] = $posts;
      $result['hash'] = wp_hash(serialize($posts));
     
      return $result;
    }
   

    function rest_data_arg_sanitize_callback( $value, $request, $param ) {
        // It is as simple as returning the sanitized value.
        return sanitize_text_field( $value );
    }


    /*

  }
}
*/

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/ticket/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'rest_device_tickets',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );




//--------------------------------------------------------
// get Ticket values
//--------------------------------------------------------
function rest_ticket_values($data) {
  $ticket_id = $data['id'];

  is_ticket_entry($ticket_id);

  $ticket = array();

  $ticket_type = get_post_meta($ticket_id, 'ticket_type', true );
  $ticket_status = get_post_meta($ticket_id, 'status', true );
  $ticket['status'] = substr($ticket_status, 2);
  $device_id = get_post_meta($ticket_id, 'device_id', true );

  if ($ticket_status == '5-waiting') {
    $waiting = get_waiting_time_and_persons($device_id, $ticket_type , $ticket_id);
    $ticket['available'] = ($waiting['time'] == 0);
  } else {
    $ticket['available'] = false;
  }
  
  if ($ticket_type == 'device') {
    $ticket['device_title'] = get_device_title_by_id($device_id);
    $ticket['color'] = get_device_type_color_field($device_id);
  } else if ($ticket_type == 'device_type') {
    $ticket['device_title'] = get_term( $device_id, 'device_type')->name;
    $ticket['color'] = get_term_meta($device_id, 'tag_color', true);
  }
 
  if ( empty( $ticket ) ) {
    return null;
  }
 
  return $ticket; 
}


function rest_private_data_permissions_check() {
  // Restrict endpoint to only users who have the edit_posts capability.
  if ( ! current_user_can( 'edit_posts' ) ) {
      return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );
  }

  // This is a black-listing approach. You could alternatively do this via white-listing, by returning false here and changing the permissions check.
  return true;
}
   


add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/ticket_values/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'rest_ticket_values',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


function rest_device_types($data) {
  $device_type_list = get_terms('device_type', array(
    'orderby'    => 'name',
    'hide_empty' => '1'
  ));
     
  if ( empty( $device_type_list ) ) {
    $result['hash'] = 'empty';
    return $result;
  }
  $result = array();
  $result['devices'] = $device_type_list;
  $result['hash'] = wp_hash(serialize($device_type_list));
     
  return $result;
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/device_types', array(
    'methods' => 'GET',
    'callback' => 'rest_device_types',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


function rest_device_type_color($data) {
  $device_type_id = $data['id'];
  
  return get_term_meta($device_type_id, 'tag_color', true);
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/device_type_color/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'rest_device_type_color',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );






?>