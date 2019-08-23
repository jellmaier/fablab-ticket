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
			  register_rest_route( RestV2Routes::appRoute, '/profiles/(?P<userId>\d+)/devices/(?P<deviceId>\d+)/new-ticket', array(
			    'methods' => RestV2Methods::GET,
			    'callback' => array('RestV2NewTicket', 'restPofileNewTicket'),
			    'permission_callback' => array('RestV2Permission', 'restUserPermissionById'),
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );
*/
			  register_rest_route( RestV2Routes::appRoute, '/profiles/(?P<userId>\d+)/devices/(?P<deviceId>\d+)/new-ticket', array(
			    'methods' => RestV2Methods::POST,
			    'callback' => array('RestV2NewTicket', 'restPofileNewTicket'),
			   // 'callback' => array('RestV2Devices', 'restPofileDevice'),
			    'permission_callback' => array('RestV2Permission', 'restUserPermissionById'),
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );

		}

  }
}

?>