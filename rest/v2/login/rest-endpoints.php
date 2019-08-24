<?php

include 'rest-login.php';
include 'rest-login-dev.php';
include 'rest-login-service.php';

if (!class_exists('RestEndpointsV2Login'))
{
  class RestEndpointsV2Login
  {

    private $routeService;
    public function __construct(RestV2RoutesService $routeService)
    {
      $this->routeService = $routeService;
    //  new RestEndpointsV2LoginNfc($routeService);
     // new RestEndpointsV2Register($routeService);


      $this->routeService->registerEndpoints($this, 'restRegisterRoutes');

      if (SettingsService::isDevMode()) {
        $this->routeService->registerEndpoints($this, 'restRegisterDEVRoutes');
      }

    }

    public function restRegisterRoutes() {
      $this->routeService->registerAnonymousPOST('login/perform-login',
        'RestV2Login','restPerformLogin');

		}

    public function restRegisterDEVRoutes() {
      $this->routeService->registerAnonymousGET('login/user-data',
        'RestV2LoginDev', 'restGetUserData');
    }

  }
}
