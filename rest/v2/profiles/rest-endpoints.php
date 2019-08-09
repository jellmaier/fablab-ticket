<?php

include 'devices/rest-endpoints.php';
include 'tickets/rest-endpoints.php';
include 'rest-permission.php';
include 'rest-profiles-service.php';

if (!class_exists('RestEndpointsV2Profiles'))
{
  class RestEndpointsV2Profiles
  {
    public function __construct()
    {
    	new RestEndpointsV2ProfilesTickets();
    	new RestEndpointsV2ProfilesDevices();

      add_action( 'rest_api_init', array(&$this, 'restRegisterRoutes') );

    }

    public function restRegisterRoutes() {

        register_rest_route( 'sharepl/v2', '/profiles', array(
			    'methods' => 'GET',
			    'callback' => array('RestV2Profiles', 'restProfilesCurrentUser'),
			   // 'permission_callback' => 'restUserPermissionById',
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );

			  register_rest_route( 'sharepl/v2', '/profiles/(?P<userId>\d+)', array(
			    'methods' => 'GET',
			    'callback' => array('RestV2Profiles', 'restProfiles'),
			    'permission_callback' => array('RestV2Permission', 'restUserPermissionById'),
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


		//--------------------------------------------------------
		// Rest get Profile for User
		//--------------------------------------------------------

		public function restProfiles($data) {

		  $user_id = $data['userId'];


		  $links = array(); 
		  array_push($links, RestEndpointsV2::createLink('profiles' . '/' . $user_id . '/devices', 'devices'));
		  array_push($links, RestEndpointsV2::createLink('profiles' . '/' . $user_id . '/tickets', 'tickets'));

		  $resource = array();
		  $resource['links'] = $links;
		  
		  return $resource;

		}


  }
}

?>