<?php

//namespace fablab_ticket;


// -----------------------------
// continue Ticket

function rest_continue_ticket($data) {

  $ticket_id = sanitize_text_field($data['id']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );

  update_post_meta($ticket_id, 'status', '1-assigned');

  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/continue_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_continue_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


// -----------------------------
// finish Ticket

function rest_finish_ticket($data) {

  $ticket_id = sanitize_text_field($data['id']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );

  update_post_meta($ticket_id, 'status', '0-finished');

  // set Time-Ticket end time
  $timeticket_id = get_post_meta( $ticket_id, 'timeticket_id', true );
  set_timeticket_end_time($timeticket_id);

  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/finish_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_finish_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


// -----------------------------
// assigne Ticket

function rest_assign_ticket($data) {

  $ticket_id = sanitize_text_field($data['ticket_id']);
  $device_id = sanitize_text_field($data['device_id']);
  $duration = sanitize_text_field($data['duration']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );


  if (intval($duration)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    update_post_meta($ticket_id, 'duration' , $duration);
    update_post_meta($ticket_id, 'ticket_type' , 'device');
    update_post_meta($ticket_id, 'status', '1-assigned');
  } else 
    return WP_Error( 'rest_noticket', __( 'Please, set duration!', 'fablab-ticket' ), array( 'status' => 422 ) );

  // create Time-Ticket entry

  $timeticket_id = get_post_meta( $ticket_id, 'timeticket_id', true );
  $user_id = get_post_field( 'post_author', $ticket_id );

  if( ! $timeticket_id ) {
    $timeticket_id = add_ticket_timeticket($device_id, $user_id, $ticket_id);

     if ($timeticket_id != 0) {
      update_post_meta($ticket_id, 'timeticket_id', $timeticket_id);
    }
  } else   // set start time
    set_timeticket_start_time($timeticket_id);
  
  
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/assign_ticket', array(
    'methods' => 'POST',
    'callback' => 'rest_assign_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


// -----------------------------
// scedule Ticket

function rest_schedule_ticket($data) {

  $ticket_id = sanitize_text_field($data['ticket_id']);
  $device_id = sanitize_text_field($data['device_id']);
  $ticket_type = sanitize_text_field($data['device_type']);
  $duration = sanitize_text_field($data['duration']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );


  if (intval($duration)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    update_post_meta($ticket_id, 'duration' , $duration);
    update_post_meta($ticket_id, 'ticket_type' , $ticket_type);
    update_post_meta($ticket_id, 'status', '3-scheduled');
  } else 
    return WP_Error( 'rest_noticket', __( 'Please, set duration!', 'fablab-ticket' ), array( 'status' => 422 ) );
  
  
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/schedule_ticket', array(
    'methods' => 'POST',
    'callback' => 'rest_schedule_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


// -----------------------------
// deactivate Ticket

function rest_deactivate_ticket($data) {
  $ticket_id = $data['id'];
  //valide input  
  if(!is_ticket_entry($ticket_id)) {
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );
  }
  deactivate_ticket($ticket_id);
  return new WP_REST_Response( null, 200 );
}

function deactivate_ticket($ticket_id) {
  update_post_meta($ticket_id, 'status', '6-inactive');
  delete_post_meta($ticket_id, 'activation_time');
  return true;
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/deactivate_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_deactivate_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


// -----------------------------
// activate Ticket

function rest_activate_ticket($data) {
  $ticket_id = $data['id'];
  //valide input  
  if(!is_ticket_entry($ticket_id)) {
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );
  }
  update_post_meta($ticket_id, 'status', '5-waiting');

  $ticket_type = get_post_meta( $ticket_id, 'ticket_type', true );
  if($ticket_type == 'device') {
    $device_id = get_post_meta( $ticket_id, 'device_id', true );
    $device_type_selected_array = wp_get_post_terms($device_id, 'device_type', array("fields" => "ids"));
    $device_type_selected = $device_type_selected_array[0];
    update_post_meta($ticket_id, 'device_id', $device_type_selected);
    update_post_meta($ticket_id, 'ticket_type' , 'device_type');
  }


  //set_activation_time($ticket_id);
  //clear_device_activation_time(get_post_meta( $ticket_id, 'device_id', true ));
  //delete_post_meta($ticket_id, 'activation_time');
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/activate_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_activate_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


// -----------------------------
// delete Ticket

function rest_delete_ticket($data) {
  $ticket_id = $data['id'];
  //valide input  
  if(!is_ticket_entry($ticket_id)) {
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );
  }

  //
  $ticket_status = get_post_meta( $ticket_id, 'status', true ); 
  $timeticket_id = get_post_meta( $ticket_id, 'timeticket_id', true ); 

  // if linked to timeticket
  if ($timeticket_id) 
  {
    if ($ticket_status == '0-finished')
      disconnect_ticket_of_timeticket($timeticket_id);
    else if($ticket_status == '6-inactive')  
      if (wp_delete_post($timeticket_id) == false) // delete Time-Ticket
       return WP_Error( 'rest_notdeleted', __( 'Time-Ticket not deleted', 'fablab-ticket' ), array( 'status' => 423 ) );
  }
 

  if (wp_delete_post($ticket_id) == false)  // delete Ticket
    return WP_Error( 'rest_notdeleted', __( 'Ticket not deleted', 'fablab-ticket' ), array( 'status' => 423 ) );
  
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/delete_ticket/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'rest_delete_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


// -----------------------------
// edit Ticket

function rest_edit_ticket($data) {

  $ticket_id = sanitize_text_field($data['ticket_id']);
  $device_id = sanitize_text_field($data['device_id']);
  //$duration = sanitize_text_field($data['duration']);

  //valide input  
  if(!is_ticket_entry($ticket_id)) 
    return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );


  //if (intval($duration)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    //update_post_meta($ticket_id, 'duration' , $duration);
    //update_post_meta($ticket_id, 'ticket_type' , 'device');
  //} else 
    //return WP_Error( 'rest_noticket', __( 'Please, set duration!', 'fablab-ticket' ), array( 'status' => 422 ) );
  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/edit_ticket', array(
    'methods' => 'POST',
    'callback' => 'rest_edit_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});

// -----------------------------
// add Ticket

function rest_add_ticket($data) {
  $device_id = sanitize_text_field($data['device_id']);
  //$duration = sanitize_text_field($data['duration']);
  $ticket_type = sanitize_text_field($data['type']);
  $options = fablab_get_option();
  $user_id = get_current_user_id();


  if ($options['ticket_online'] != 1)
    return new WP_Error( 'rest_ticket_offline', __( 'Ticket-System offline', 'fablab-ticket' ), array( 'status' => 423 ) );

  $duration = $options['ticket_max_time'];
  /*
  //valide input
  if(($duration > $options['ticket_max_time']) || user_has_ticket($user_id, $device_id, 'device')) {
    die(false);
  }
*/

  if (($ticket_type == 'device') && is_no_device_entry($device_id))
    return new WP_Error( 'rest_nodevice', __( 'Is not a device', 'fablab-ticket' ), array( 'status' => 422 ) );
  else if (($ticket_type == 'device_type') && is_no_device_type($device_id))
    return new WP_Error( 'rest_nodevice_type', __( 'Is not a device_type', 'fablab-ticket' ), array( 'status' => 422 ) );
  

/*
  //check how many tickets of user
  $tickets_per_user = $options['tickets_per_user'];
  $query_arg = array(
        'post_type' => 'ticket',
        'author' => $user_id,
        'post_status' => array('publish', 'draft'),
        'meta_query'=>array(
          array(
            'key'=>'ticket_type',
            'value'=> 'device',
      )
    )
  );

  $ticket_query = new WP_Query($query_arg);

  if ($ticket_query->found_posts >= $tickets_per_user) 
    return WP_Error( 'rest_max_tickets', __( 'Max number of Tickets', 'fablab-ticket' ), array( 'status' => 422 ) );

  */

  $post_information = array(
    'post_title' => sprintf(__( '%s, from: ', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )) . wp_get_current_user()->display_name,//fablab_get_captions('ticket_caption') . ", von: " . 
    'post_type' => 'ticket',
    'post_author' => $user_id,
    'post_status' => 'publish',
  );

  $ID = wp_insert_post( $post_information );


  if ($ID != 0) {
    add_post_meta($ID, 'device_id', $device_id);
    add_post_meta($ID, 'duration' , $duration);
    add_post_meta($ID, 'ticket_type' , $ticket_type);
    add_post_meta($ID, 'status' , "5-waiting");
    $pin = wp_rand(1000,9999);
    add_post_meta($ID, 'pin' , $pin);
    //send_email_to_current_user();
  }


  return new WP_REST_Response( null, 200 );
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'sharepl/v1', '/add_ticket', array(
    'methods' => 'POST',
    'callback' => 'rest_add_ticket',
    'permission_callback' => 'rest_has_ticket_update_permission',
    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
  ) );
});


function is_ticket_entry($ID) {
  $post_object = get_post($ID);
  return (!empty($post_object) && ($post_object->post_type == 'ticket'));
}
/*
function send_email_to_current_user() {
  $to = "jakob.ellmaier@gmx.at";
  $subject = "Learning how to send an Email in WordPress";
  $content = "WordPress knowledge";
  $status = wp_mail($to, $subject, $content);
}
*/

?>