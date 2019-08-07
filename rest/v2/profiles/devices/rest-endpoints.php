<?php

if (!class_exists('RestEndpointsV2ProfilesDevices'))
{
  class RestEndpointsV2ProfilesDevices
  {
    public function __construct()
    {

      add_action( 'rest_api_init', array(&$this, 'restRegisterRoutes') );

    }

    public function restRegisterRoutes() {

			  register_rest_route( 'sharepl/v2', '/profiles/(?P<id>\d+)/devices', array(
			    'methods' => 'GET',
			    'callback' => array(&$this, 'restPofileDeviceTypes'),
			    'permission_callback' => 'restUserPermissionById',
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );

		}

    //--------------------------------------------------------
		// Rest get Profiles for current User
		//--------------------------------------------------------

		public function restProfilesCurrentUser($data) {

		  $links = array(); 
		  array_push($links, RestEndpointsV2::createLink('profiles' . '/' . get_current_user_id(), 'related'));

		  $resource = array();
		  $resource['links'] = $links;
		  
		  return $resource;

		}

		public function restPofileDeviceTypes($data) {
		  
		  $user_id = $data['id'];

		  if (fablab_get_option('ticket_online') != 1)
		    return new WP_Error( 'rest_ticket_offline', __( 'Ticket-System offline', 'fablab-ticket' ), array( 'status' => 423 ) );

		  return get_device_types($user_id);
		}


  }
}

?>