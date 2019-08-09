<?php

include 'rest-devices-service.php';

if (!class_exists('RestEndpointsV2ProfilesDevices'))
{
  class RestEndpointsV2ProfilesDevices
  {

    public function __construct()
    {

      add_action( 'rest_api_init', array(&$this, 'restRegisterRoutes') );

    }

    public function restRegisterRoutes() {

			  register_rest_route( 'sharepl/v2', '/profiles/(?P<userId>\d+)/devices', array(
			    'methods' => 'GET',
			    'callback' => array('RestV2Devices', 'restPofileDevices'),
			    'permission_callback' => array('RestV2Permission', 'restUserPermissionById'),
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );

			 register_rest_route( 'sharepl/v2', '/profiles/(?P<userId>\d+)/devices/(?P<deviceId>\d+)', array(
			    'methods' => 'GET',
			    'callback' => array('RestV2Devices', 'restPofileDevice'),
			  //  'permission_callback' => 'restUserPermissionById',
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );

		}

  }
}

?>