<?php

// Rest Permisions

function restUserPermission() {

  if ( ! is_user_logged_in() )
    return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );
  
  return true;
}

// Rest Permisions

function restUserPermissionById($data) {
  $user_id = $data['id'];

   if ( is_user_logged_in() && $user_id == get_current_user_id()) {
    return true;
   }
  
  return new WP_Error( 'rest_forbidden', 'OMG you can not view private data.', array( 'status' => 401 ) );
}

?>