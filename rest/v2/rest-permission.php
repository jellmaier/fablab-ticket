<?php


if (!class_exists('RestV2Permission'))
{
  class RestV2Permission
  {
    public function restAnonymous() {
      return true;
    }

		public function restLoggedInPermission() {

		  if ( ! UserService::isLoggedIn() )
		    return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );
		  
		  return true;
		}

		// Rest Permisions

		public function restUserPermissionById($data) {
		  $user_id = $data['userId'];

		   if ( UserService::isLoggedInAsUser($user_id) ) {
		    return true;
		   }
		  
		  return new WP_Error( 'rest_forbidden', 'OMG you can not view private data.', array( 'status' => 401 ) );
    }

    public function restTicketUpdatePermission($data) {
      $user_id = $data['userId'];
      $ticket_id = $data['ticketId'];

      if ( ! UserService::isLoggedInAsUser($user_id) )
        return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );

/*
      // Chech TAC Accaptance
      if(!fablab_user_tac_acceptance())
        return new WP_Error( 'rest_forbidden', __( 'OMG you have not accapted TAC.', 'fablab-ticket' ), array( 'status' => 403 ) );
*/
      if (RestV2Permission::hasTicketUpdatePermission($user_id, $ticket_id))
        return true;

      return new WP_Error( 'rest_forbidden', __( 'OMG you can not view private data.', 'fablab-ticket' ), array( 'status' => 401 ) );
    }

    private function hasTicketUpdatePermission($user_id, $ticket_id) {
      $post_object = get_post($ticket_id);
      return ($post_object->post_author == $user_id);
    }


  }
}
