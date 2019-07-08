<?php

//namespace fablab_ticket;

function get_ticket_query_from_user($user_id, $device_id = '-1') {
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'orderby' => array( 
      'meta_value' => 'ASC', 
      'date' => 'ASC',
    ),
    'meta_key' => 'status',
    'post_status' => 'publish',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'   => array( 'device', 'device_type'),
          'compare' => 'IN',
      )
    )
  );
  return new WP_Query($query_arg);
}

function getTicketQueryFromUserV2($user_id, $device_id = '-1') {
  $query_arg = array(
    'post_type' => 'ticket',
    'author' => $user_id,
    'orderby' => array( 
      'meta_value' => 'ASC', 
      'date' => 'ASC',
    ),
    'meta_key' => 'status',
    'post_status' => 'publish',
    'meta_query'=>array(
      array(
          'key'=>'ticket_type',
          'value'   => array( 'device', 'device_type'),
          'compare' => 'IN',
      )
    )
  );
  return new WP_Query($query_arg);
}

?>