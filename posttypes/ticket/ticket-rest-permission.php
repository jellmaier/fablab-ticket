<?php

//namespace fablab_ticket;


// Rest Permisions

function rest_ticket_user_permission() {

  if ( ! is_user_logged_in() )
    return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );
  
  return true;
}

function rest_tac_permission() {

  if ( ! is_user_logged_in() )
    return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );

  // Chech TAC Accaptance
  if(!fablab_user_tac_acceptance())
    return new WP_Error( 'rest_forbidden', __( 'OMG you have not accapted TAC.', 'fablab-ticket' ), array( 'status' => 403 ) );
  
  return true;
}

function rest_has_ticket_update_permission($data) {
  if (isset($data['id']))
    $ticket_id = sanitize_text_field($data['id']);
  else if (isset($data['ticket_id']))
    $ticket_id = sanitize_text_field($data['ticket_id']);
  else
    $ticket_id = 0;


  // Chech TAC Accaptance
  if(!fablab_user_tac_acceptance())
    return new WP_Error( 'rest_forbidden', __( 'OMG you have not accapted TAC.', 'fablab-ticket' ), array( 'status' => 403 ) );

  if (has_ticket_update_permission($ticket_id))
    return true;
  
  return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );
}

function rest_is_manager() {

  if (is_manager())
    return true;
  
  return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );
}

function has_ticket_update_permission($post_id = 0) {
  $post_object = get_post($post_id);
  return (($post_object->post_author == get_current_user_id()) 
              || current_user_can( 'delete_others_posts' ));
}

/*
function has_timeticket_update_permission($post_id = 0) {
  return ((get_post_meta($post_id, 'timeticket_user', true ) == get_current_user_id()) || is_manager());
}
*/
function is_manager() {
  return current_user_can('delete_others_posts');
}

?>