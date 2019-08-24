<?php

if (!class_exists('RestV2RoutesService'))
{
  class RestV2RoutesService
  {

    public function __construct()
    {
    }

    public function registerEndpoints($callbackClass, $callbackMethod) {
      add_action( 'rest_api_init', [$callbackClass, $callbackMethod] );
    }

    public function registerRoute($path, $method, $permission, $callbackClass, $callbackMethod) {
      register_rest_route( RestV2Routes::appRoute, $path, array(
        'methods' => $method,
        'callback' => array($callbackClass, $callbackMethod),
        'permission_callback' => array('RestV2Permission', $permission),
        'sanitize_callback' => 'rest_data_arg_sanitize_callback',
      ) );
    }

    // ---------- Anonymous Methods -------------------

    public function registerAnonymousGET($path, $callbackClass, $callbackMethod) {

      $this->registerRoute($path, RestV2Methods::GET,'restAnonymous',
                           $callbackClass, $callbackMethod);
    }

    public function registerAnonymousPOST($path, $callbackClass, $callbackMethod) {

      $this->registerRoute($path, RestV2Methods::POST,'restAnonymous',
                           $callbackClass, $callbackMethod);
    }

    // ---------- Logged In Methods -------------------

    public function registerLoggedInGET($path, $callbackClass, $callbackMethod) {

      $this->registerRoute($path, RestV2Methods::GET,'restLoggedInPermission',
                           $callbackClass, $callbackMethod);
    }


    // ---------- User Methods -------------------

    public function registerUserGET($path, $callbackClass, $callbackMethod) {

      $this->registerRoute($path, RestV2Methods::GET,'restUserPermissionById',
        $callbackClass, $callbackMethod);
    }

    public function registerUserPOST($path, $callbackClass, $callbackMethod) {

      $this->registerRoute($path, RestV2Methods::POST,'restUserPermissionById',
        $callbackClass, $callbackMethod);
    }

    public function registerUserPUT($path, $callbackClass, $callbackMethod) {

      $this->registerRoute($path, RestV2Methods::PUT,'restUserPermissionById',
        $callbackClass, $callbackMethod);
    }

    public function registerUserDELETE($path, $callbackClass, $callbackMethod) {

      $this->registerRoute($path, RestV2Methods::DELETE,'restUserPermissionById',
        $callbackClass, $callbackMethod);
    }

  }
}
