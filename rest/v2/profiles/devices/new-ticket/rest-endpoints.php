<?php

include 'rest-create-new-ticket-service.php';

if (!class_exists('RestEndpointsV2ProfilesDevicesNewTicket'))
{
  class RestEndpointsV2ProfilesDevicesNewTicket
  {

    public function __construct()
    {

      add_action( 'rest_api_init', array(&$this, 'restRegisterRoutes') );

    }

    public function restRegisterRoutes() {
/*
			  register_rest_route( 'sharepl/v2', '/profiles/(?P<userId>\d+)/devices/(?P<deviceId>\d+)/new-ticket', array(
			    'methods' => 'GET',
			    'callback' => array('RestV2NewTicket', 'restPofileNewTicket'),
			    'permission_callback' => array('RestV2Permission', 'restUserPermissionById'),
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );
*/
			  register_rest_route( 'sharepl/v2', '/profiles/(?P<userId>\d+)/devices/(?P<deviceId>\d+)/new-ticket', array(
			    'methods' => 'POST',
			    'callback' => array('RestV2NewTicket', 'restPofileNewTicket'),
			   // 'callback' => array('RestV2Devices', 'restPofileDevice'),
			    'permission_callback' => array('RestV2Permission', 'restUserPermissionById'),
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );

		}

  }
}

?>