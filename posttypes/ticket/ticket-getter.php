<?php

//namespace fablab_ticket;

function get_ticket_device($ID) {
    $custom = get_post_custom($ID);
    if (isset($custom['device_id'])) {
        return $custom['device_id'][0];
    } else {
      return 'not set';
    }
}

function set_activation_time($ticket_id) {
  if(is_ticket_entry($ticket_id) && !is_active_ticket($ticket_id)) {
    update_post_meta($ticket_id, 'activation_time', current_time( 'timestamp' ));
    return true;
  }
  return false;
}

function get_activation_time($ticket_id) {
  return get_post_meta( $ticket_id, 'activation_time', true );
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


?>