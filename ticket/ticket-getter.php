<?php

//namespace fablab_ticket;

/*

function get_instruction_query_from_user($user_id) {
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'orderby' => 'date', 
    'order' => 'ASC',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'instruction',
      )
    )
  );
  return new WP_Query($query_arg);
}

*/

function get_ticket_device($ID) {
    $custom = get_post_custom($ID);
    if (isset($custom['device_id'])) {
        return $custom['device_id'][0];
    } else {
      return 'not set';
    }
}

/*

function insert_ticket() {
  $device_id = sanitize_text_field($_POST['device_id']);
  $duration = sanitize_text_field($_POST['duration']);
  $ticket_type = sanitize_text_field($_POST['type']);
  $options = fablab_get_option();
  $user_id = get_current_user_id();

  //valide input
  if(($duration > $options['ticket_max_time']) || user_has_ticket($user_id, $device_id, 'device')) {
    die(false);
  }

  if (($ticket_type == 'device') || ($ticket_type == 'device_type') || ($ticket_type == 'instruction')) {
    if (($ticket_type == 'device') && is_no_device_entry($device_id)) {
        die(false);
    } else if (($ticket_type == 'device_type') && is_no_device_type($device_id)) {
        die(false);
    }

  
  } else
    die(false);



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
  if ($ticket_query->found_posts < $tickets_per_user) {
    $post_information = array(
      'post_title' => fablab_get_captions('ticket_caption') . ", von: " . wp_get_current_user()->display_name,
      'post_type' => 'ticket',
      'author' => get_current_user_id(),
      'post_status' => 'publish',
    );
   
    $ID = wp_insert_post( $post_information );

    if ($ID != 0) {
      add_post_meta($ID, 'device_id', $device_id);
      add_post_meta($ID, 'duration' , $duration);
      add_post_meta($ID, 'ticket_type' , $ticket_type);
      add_post_meta($ID, 'status' , "5-waiting");
    }
    
    die($ID != 0);
  }
  die(false);
}
add_action( 'wp_ajax_add_ticket', 'insert_ticket' );

*/

/*

function insert_instruction_ticket() {
  $device_id = sanitize_text_field($_POST['device_id']);
  $options = fablab_get_option();
  $user_id = get_current_user_id();

  //valide input
  if(is_no_device_entry($device_id) || user_has_ticket($user_id, $device_id, 'instruction')) {
    die(false);
  }

  $post_information = array(
    'post_title' => fablab_get_captions('instruction_request_caption') . ', von: ' . wp_get_current_user()->display_name,
    'post_type' => 'ticket',
    'author' => $user_id,
    'post_status' => 'publish',
  );
 
  $ID = wp_insert_post( $post_information );

  if ($ID != 0) {
    add_post_meta($ID, 'device_id', $device_id);
    add_post_meta($ID, 'ticket_type' , 'instruction');
  }
  
  die($ID != 0);
}
add_action( 'wp_ajax_add_instruction_ticket', 'insert_instruction_ticket' );

*/

/*


function update_ticket() {
  $device_id = sanitize_text_field($_POST['device_id']);
  $duration = sanitize_text_field($_POST['duration']);
  $ticket_id = sanitize_text_field($_POST['ticket_id']);
  $ticket_type = sanitize_text_field($_POST['type']);

  $user_id = get_current_user_id();
  $options = fablab_get_option();

  if ((get_ticket_device($ticket_id) != $device_id) && 
    user_has_ticket($user_id, $device_id, 'device')) {
    die(false);
  }

  //valide input  
  if(($duration > $options['ticket_max_time']) 
    || !is_ticket_entry($ticket_id) || !has_ticket_update_permission($ticket_id)) {
        if (($ticket_type == 'device') && is_no_device_entry($device_id)) {
        die(false);
    } else if (($ticket_type == 'device_type') && is_no_device_type($device_id)) {
        die(false);
    }
  }

  if (intval($duration) && intval($ticket_id)) {
    update_post_meta($ticket_id, 'device_id', $device_id);
    update_post_meta($ticket_id, 'duration' , $duration);
    update_post_meta($ticket_id, 'ticket_type' , $ticket_type);
  } else {
    die('naN');
    return;
  }
       
  die(true);
}
add_action( 'wp_ajax_update_ticket', 'update_ticket' );

*/

/*
function delete_ticket() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  //valide input  
  if(!is_ticket_entry($ticket_id) || !has_ticket_update_permission($ticket_id)) {
    die(false);
  }
  die(!(wp_delete_post($ticket_id) == false));
}
add_action( 'wp_ajax_delete_ticket', 'delete_ticket' );
*/

/*
function deactivate_ticket_ajax() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  //valide input  
  if(!is_ticket_entry($ticket_id) || !is_manager()) {
    die(false);
  }
  die(deactivate_ticket($ticket_id));
}
add_action( 'wp_ajax_deactivate_ticket', 'deactivate_ticket_ajax' );
*/
/*
function activate_ticket() {
  $ticket_id = sanitize_text_field($_POST['ticket_id']);

  //valide input  
  if(!is_ticket_entry($ticket_id) || !is_manager()) {
    die(false);
  }


  update_post_meta($ticket_id, 'status', '5-waiting');
  clear_device_activation_time(get_post_meta( $ticket_id, 'device_id', true ));

  die(true);
}
add_action( 'wp_ajax_activate_ticket', 'activate_ticket' );
*/

function set_activation_time($ticket_id) {
  if(is_ticket_entry($ticket_id) && !is_active_ticket($ticket_id)) {
    update_post_meta($ticket_id, 'activation_time', current_time( 'timestamp' ));
    return true;
  }
  return false;
}

function clear_device_activation_time($device_id){
  global $post;
  $query_arg = array(
    'post_type' => 'ticket',
    'orderby' => 'date', 
    'order' => 'ASC',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> 'device',
      ),
      array(
          'key'=>'activation_time',
          'value'=> '',
          'compare' => '!='
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;
    delete_post_meta($post->ID, 'activation_time');
  endwhile;
}

function is_active_ticket($ticket_id){
  $activation_time = get_activation_time($ticket_id);
  if(empty($activation_time)){
    return false;
  }
  return true;
}

function user_has_ticket($user_id, $device_id, $device_type){
  global $post;
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'post_status' => array('publish', 'draft'),
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'=> $device_type,
      ),
      array(
          'key'=>'device_id',
          'value'=> $device_id,
      )
    )
  );
  $ticket_query = new WP_Query($query_arg);
  if ( $ticket_query->have_posts() ) {
    return true;
  }
  return false;
}

function get_activation_time($ticket_id) {
  return get_post_meta( $ticket_id, 'activation_time', true );
}
/*
function get_timediff_string($first_time, $second_time = 0) {
  if($second_time == 0) {
    $second_time = current_time('timestamp');
  }
  $second_time = round($second_time / 60);
  $first_time = round($first_time / 60);
  if($second_time > $first_time){
    return 'vor ' . get_post_time_string($second_time - $first_time);
  } else if ($first_time > $second_time) {
    return 'in ' . get_post_time_string($first_time - $second_time);
  } else {
    return 'jetzt';
  }
}

function get_post_time_string($time, $shownull = false) {
  $ret = "";
  $hours = floor($time / 60);
  $minutes = $time % 60;
  $hours > 0 ? ($ret .= $hours . " Stunde") : ('');
  $hours > 1 ? ($ret .= "n") : ('') ;
  $hours > 0 && $minutes > 0 ? ($ret .= ", ") : ('') ;
  if($shownull && $hours == 0) {
    $ret .= $minutes . " Minute";
    $minutes != 1 ? ($ret .= "n") : ('');
  } else {
    $minutes > 0 ? ($ret .= $minutes . " Minute") : ('');
    $minutes > 1 ? ($ret .= "n") : ('');
  }
  return $ret;
}
*/
?>