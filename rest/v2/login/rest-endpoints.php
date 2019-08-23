<?php

include 'rest-login.php';
include 'rest-login-dev.php';
include 'rest-login-service.php';

if (!class_exists('RestEndpointsV2Login'))
{
  class RestEndpointsV2Login
  {

    public function __construct()
    {
      add_action( 'rest_api_init', array(&$this, 'restRegisterRoutes') );
      add_action( 'rest_api_init', array(&$this, 'restRegisterDEVRoutes') ); //todo dev mode check
    }

    public function restRegisterRoutes() {

      register_rest_route( RestV2Routes::appRoute, 'login/perform-login', array(
        'methods' => RestV2Methods::POST,
        'callback' => array('RestV2Login', 'restPerformLogin'),
        'sanitize_callback' => 'rest_data_arg_sanitize_callback',
      ) );

		}

    public function restRegisterDEVRoutes() {

      register_rest_route( RestV2Routes::appRoute, 'login/user-data', array(
        'methods' => RestV2Methods::GET,
        'callback' => array('RestV2LoginDev', 'restGetUserData'),
        'sanitize_callback' => 'rest_data_arg_sanitize_callback',
      ) );

    }

  }
}

?>