<?php

include 'rest-ticket-service.php';

if (!class_exists('RestEndpointsV2ProfilesTickets'))
{
  class RestEndpointsV2ProfilesTickets
  {
    public function __construct()
    {

      add_action( 'rest_api_init', array(&$this, 'restRegisterRoutes') );

    }

    public function restRegisterRoutes() {

      register_rest_route( RestV2Routes::appRoute, '/profiles/(?P<userId>\d+)/tickets', array(
			    'methods' => RestV2Methods::GET,
			    'callback' => array('RestV2Tickets', 'restTicketsForUser'),
			    'permission_callback' => array('RestV2Permission', 'restUserPermissionById'),
			    'sanitize_callback' => 'rest_data_arg_sanitize_callback',
			  ) );


		}

  }
}

?>