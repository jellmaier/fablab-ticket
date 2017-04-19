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
    // Get Tickets by Query
    //--------------------------------------------------------

     function rest_get_tickets($ticket_query, $old_hash) {
      
      $ticket_list = array();

      global $post;

      if ( $ticket_query->have_posts() ) {
        while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
          $ticket = array();
          $ticket['ID'] = $post->ID;
          $ticket['post_title'] = $post->post_title;
          $ticket['post_date'] = $post->post_date;


          //$ticket['ticket_type'] = get_post_meta($ticket_id, 'ticket_type', true );
          $ticket_status = get_post_meta($post->ID, 'status', true );
          $ticket['status'] = substr($ticket_status, 2);
          //$ticket['device_id'] = get_post_meta($ticket_id, 'device_id', true );

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
    // get active Tickets of device
    //--------------------------------------------------------
    function rest_device_tickets($data) {
      $device_id = sanitize_text_field($data['device_id']);
      $old_hash = sanitize_text_field($data['hash']);

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
          'date' => 'ASC',
        ),
        'meta_key' => 'status',
        'post_status' => 'publish',
        'meta_query'=> $meta_array,
      );

/*
      // without meta values
      $posts = get_posts( $query_arg);
      if ( empty( $posts ) ) {
         $result = array();
        $result['hash'] = 'empty';
        return $result;
      }
      */

      // query with meta values

      $ticket_query = new WP_Query($query_arg);

      return rest_get_tickets($ticket_query, $old_hash);
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
  register_rest_route( 'sharepl/v1', '/ticket', array(
    'methods' => 'GET',
    'callback' => 'rest_device_tickets',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
} );


//--------------------------------------------------------
// Rest get Tickets from curent User
//--------------------------------------------------------

function rest_current_user_tickets($data) {
  $old_hash = sanitize_text_field($data['hash']);
  
  return rest_get_tickets(get_ticket_query_from_user(get_current_user_id()), $old_hash);


/*
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    $ticket_type = get_post_meta($post->ID, 'ticket_type', true );
    $waiting = get_waiting_time_and_persons(get_post_meta($post->ID, 'device_id', true ), $ticket_type, $post->ID);
    $device_id = get_post_meta($post->ID, 'device_id', true );
    $calc_time = fablab_get_option('ticket_calcule_waiting_time');

    if ($ticket_type == 'device') {
      $device_title = get_device_title_by_id($device_id);
      $color = get_device_type_color_field(get_post_meta($post->ID, 'device_id', true ));
    } else if ($ticket_type == 'device_type') {
      $device_title = get_term( $device_id, 'device_type')->name;
      $color = get_term_meta($device_id, 'tag_color', true);
    }
    $available = ($waiting['time'] == 0);
  endwhile;

  wp_reset_query();
*/
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/tickets_current_user', array(
    'methods' => 'GET',
    'callback' => 'rest_current_user_tickets',
    'permission_callback' => 'rest_private_data_permissions_check',
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



//--------------------------------------------------------
// Rest get Device Types
//--------------------------------------------------------

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


?>